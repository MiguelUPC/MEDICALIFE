import React from 'react';
import {Header} from '../health/components/Header';
import Box from '@mui/material/Box';
import AddSpecialtyButton from '../components/AddSpecialtyButton';
export const Especialidades = () => {

  const addSpecialty = (specialty) => {
    setSpecialties([...specialties, specialty]);
  };
  return (
    <>
      <Box sx={{ display: 'flex' }}>
          <Header/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <div>
              <br />
              <br />
              <h1>AGREGAR ESPECIALIDAD</h1>
              <AddSpecialtyButton onAddSpecialty={addSpecialty} />
            </div>
            </Box>
      </Box>
    </>
  );
}

export default Especialidades;