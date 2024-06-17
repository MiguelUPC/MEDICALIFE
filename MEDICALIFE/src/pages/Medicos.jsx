import React, { useState } from 'react';
import AddMedicButton from '../components/AddMedicButton';
import MedicGrid from '../components/MedicGrid';

import {Header} from '../health/components/Header';
import Box from '@mui/material/Box';

export const Medicos = () => {
  const [medics, setMedics] = useState([]);
  const [specialties, setSpecialties] = useState(['Cardiología', 'Dermatología', 'Neurología', 'Oncología', 'Pediatría', 'Psiquiatría']);

  const addMedic = (medic) => {
    setMedics([...medics, medic]);
  };

 
  return (
      <>
      <Box sx={{ display: 'flex' }}>
          <Header/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>
              <h1>AGREGAR MÉDICO</h1>
              <AddMedicButton onAddMedic={addMedic} specialties={specialties} />
              
              <MedicGrid medics={medics} />
              
            </div>
          </Box>
      </Box>
      </>
  )
}

export default Medicos;