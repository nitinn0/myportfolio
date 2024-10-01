import React from "react";
import Fab from '@mui/material/Fab'; 
import { styled } from '@mui/material/styles';

export const CustomFab = styled(Fab)({
  backgroundColor: 'white',
  color: 'blue',
  '&:hover': {
    backgroundColor: '#f0f0f0', 
  },
});

export const Buttons = ({ onSectionClick }) => {
  return (
    <>
    <div className='d-flex my-4 mx-4' style={{ position: 'relative', bottom: '13px', right: '20px' }}>
      <CustomFab variant="extended" size="medium" sx={{ mx: 4 }} onClick={() => onSectionClick('experience')}>
        Experience
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('projects')}>
        Projects
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('education')}>
        Education
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('honors')}>
        Honors
      </CustomFab>
    </div>
    <hr style={{ 
        margin: '0', 
        border: '1px solid #ccc', // Change color if needed
        width: '100%', // Ensure it spans the full width
        height: '0', // Ensures no extra height is added
      }} />
    </>
  );
};

export default Buttons;
