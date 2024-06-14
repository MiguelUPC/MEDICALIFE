const sequelize = require('../config/db');
const { Op } = require('sequelize');
const Medic = require('../models/medicModel');

// Obtener todos los médicos
exports.getAllMedics = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query('SELECT * FROM Medicos');
    res.json(results);
  } catch (error) {
    console.error('Error fetching medics:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Agregar un nuevo médico
exports.addMedic = async (req, res) => {
  const { id, nombre, especialidad } = req.body;
  try {
    const [results, metadata] = await sequelize.query(
      'INSERT INTO Medicos (DoctorID, nombre, especialidad) VALUES (:id, :nombre, :especialidad)',
      {
        replacements: { id, nombre, especialidad },
      }
    );
    res.status(201).json({ id, nombre, especialidad });
  } catch (error) {
    console.error('Error adding medic:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Buscar médicos por nombre
exports.searchMedics = async (req, res) => {
  const { searchText } = req.query;

  try {
    const medics = await Medic.findAll({
      where: {
        nombre: {
          [Op.like]: `%${searchText}%`
        }
      }
    });
    res.json(medics);
  } catch (error) {
    console.error('Error al buscar médicos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
