import React from "react";


const Education = () => {
  return (
    <div>
      <div style={styles.educationCard}>
        <h4>Secondary Education</h4>
        <p>Homerton Grammar School, Faridabad</p>
        <p>August 2020 - July 2022</p>
      </div>

      <div style={styles.educationCard}>
        <h4>Bachelor of Computer Application</h4>
        <p>Jb Knowledge Park, Faridabad (affiliated to MDU)</p>
        <p>Aug 2022 - July 2025 (Expected)</p>
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
