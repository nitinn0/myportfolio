import React from 'react'

const Honors = () => {
  return (
    <div style={styles.honorsCard}>
      <h4>IT UTSAV</h4>
      <p>Coded a website named Citrus Fruits which was proposed for the vegetables and fruit sellers who want to deliever their fresh items to the customers at their doorstep.</p>
    </div>
  )
}

const styles = {
    honorsCard : {
        backgroundColor: "#fff",
        padding: "20px",
        margin:"9px",
        borderRadius: "8px",
        boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
    },
};

export default Honors
