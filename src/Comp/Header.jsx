import React from 'react';
import Fab from '@mui/material/Fab'; // Import Fab from Material UI
import ArticleIcon from '@mui/icons-material/Article';
import WavingHandIcon from '@mui/icons-material/WavingHand';



const Header = () => {
  return (
    <div className="container" style={{ fontFamily:"-moz-initial" }}>
      <div className="">
        <div className="col-md-10 mx-5">
          <div className="card" style={{ padding:'57px', marginLeft:'10px', border: '1px solid #ddd', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img src={`${process.env.PUBLIC_URL}/mein.jpg`} alt="Your image" style={{ width: '120px', height: '110px', borderRadius: '50%' }} />
          </div>
            <p style={{ fontSize: "3rem", fontWeight: "bold", marginBottom: '8px' }}>
              Nitin Kapoor
            </p>

            <p style={{ fontSize: '19px', marginTop: '5px', marginLeft:'2px' }}>
              Frontend Developer | BCA '25 <span style={{ fontSize: '15px' }}>@MDU</span>
            </p>

            <div className="my-4">
              <Fab variant="extended" color="primary" sx={{ mr: 2 }}>
                <ArticleIcon sx={{ mr: 1 }} />
                Resume
              </Fab>

              <Fab variant="extended" color="primary">
                <WavingHandIcon sx={{ mr:1 }} />
                Say Hi
              </Fab>
            </div>

            <hr />

            {/* Description */}
            <div style={{ textAlign: 'left', fontFamily:"'Lato', sans-serif"}}>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam mollitia corrupti voluptate optio asperiores aut aspernatur ipsam deleniti architecto cupiditate dolorum eaque, impedit ea? Optio inventore perferendis obcaecati eum voluptas nulla maiores aperiam illum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
