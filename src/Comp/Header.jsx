import React from 'react';
import Fab from '@mui/material/Fab';
import ArticleIcon from '@mui/icons-material/Article';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const Header = ({ onSectionClick }) => {
  return (
    <div className="container" style={{ fontFamily: "-moz-initial" }}>
      <div className="">
        <div className="col-md-10 mx-5">
          <div className="card" style={{ padding: '57px', marginLeft: '10px', border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img src={`${process.env.PUBLIC_URL}/mein.jpg`} alt="Your image" style={{ width: '120px', height: '110px', borderRadius: '50%' }} />
            </div>
            <p style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: '5px' }}>
              Nitin Kapoor
            </p>
            <p style={{ fontSize: '19px', marginTop: '5px', marginLeft: '2px' }}>
              Frontend Developer | BCA '25 <span style={{ fontSize: '15px' }}>@MDU</span>
            </p>
            <div className="my-3">
              <Fab variant="extended" color="primary" sx={{ mr: 2 }}>
                <ArticleIcon sx={{ mr: 1 }} />
                Resume
              </Fab>
              <Fab variant="extended" color="primary" onClick={() => onSectionClick('sayHi')}>
                <WavingHandIcon sx={{ mr: 1 }} />
                Say Hi
              </Fab>
            </div>
            <hr />
            <div style={{ fontSize: '17px', textAlign: 'left', fontFamily: 'sans-serif', lineHeight: '1.5'}}>
  <p>
    I am a passionate Frontend Developer in my final year of pursuing a 
    Bachelor of Computer Applications. Specializing in crafting 
    visually appealing and user-friendly web applications with 
    ReactJS and Material-UI, I am eager to secure an internship 
    to refine my skills further and contribute to exciting 
    projects in the tech industry.
  </p>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
