import React from 'react';
import Fab from '@mui/material/Fab'; 
import { styled } from '@mui/material/styles';

export const CustomFab = styled(Fab)({
    backgroundColor: 'white',
    color: 'blue',
    '&:hover': {
      backgroundColor: 'blue', 
      color:'white'
    },
  });

const SayHi = () => {
  return (
    <div style={styles.container}>
      <h2>Say Hi!</h2>
      <p>Want to reach out? I'd love to hear from you!</p>

      <form style={styles.form}>
        <input
          type="email"
          placeholder="Your Email"
          style={styles.input}
        />
        <textarea
          placeholder="Your Message"
          style={styles.textarea}
        />
    <CustomFab variant="extended" size="medium" sx={{ my:1 }}>
        Send Message
      </CustomFab>
      </form>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    fontFamily: "'Lato', sans-serif",
    marginTop: '20px',
    padding: '20px',
    // backgroundColor: '#f9f9f9',
  },
  form: {
    display: 'inline-block',
    width: '300px',
    padding: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
  },
  textarea: {
    display: 'block',
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '16px',
    height: '100px',
  }
};
export default SayHi;
