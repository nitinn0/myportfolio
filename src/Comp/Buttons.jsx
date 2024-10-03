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
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('projects')}>
        Projects
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('education')}>
        Education
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 4 }} onClick={() => onSectionClick('myblogs')}>
      Blogs
      </CustomFab>
      <CustomFab variant="extended" size="medium" sx={{ mx: 5 }} onClick={() => onSectionClick('honors')}>
  Honors <span role="img" aria-label="trophy"> 🏆</span>
</CustomFab>

    </div>
    <hr style={{ 
        margin: '0',
        marginBottom:'15px',
        border: '1px solid #ccc', 
        width: '100%', 
        height: '0', 
      }} />
    </>
  );
};

export default Buttons;
