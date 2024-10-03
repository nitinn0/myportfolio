import React from "react";


const Education = () => {
  return (
    <div>
      <div style={styles.educationCard}>
        <h4>Secondary Education</h4>
        <p style={{marginBottom:'10px'}}>Homerton Grammar School, Faridabad</p>
        <p style={{fontSize:'15px'}}>August 2020 - July 2022</p>
        <p><span style={{fontSize:'17px'}}>GRADE</span>: A</p>
      </div>

      <div style={styles.educationCard}>
        <h4>Bachelor of Computer Application</h4>
        <p style={{marginBottom:'10px'}}>Jb Knowledge Park, Faridabad (affiliated to MDU)</p>
        <p style={{fontSize:'15px'}}>Aug 2022 - July 2025 (Expected)</p>
      </div>

      </div>
  );
};

const styles = {
  educationCard: {
    backgroundColor: "#fff",
    padding: "20px",
    margin:"9px",
    borderRadius: "8px",
    boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Education;
