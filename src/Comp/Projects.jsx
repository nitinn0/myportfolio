const Projects = () => {
  return (
    <div style={styles.cardProject}>
      <a
        href="https://youtu.be/DMnZTRnDkeg?si=vCxDdsbWNGmCMPpw"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/image.png" alt="Thumbnail" style={{ width: '130px', height: '120px', borderRadius: '50%' }} />
      </a>
      <h4></h4>
      <p></p>
    </div>
  );
};

const styles = {
  cardProject: {
    backgroundColor: "#fff",
    padding: "20px",
    margin: "9px",
    borderRadius: "8px",
    boxShadow: "0 10px 8px rgba(0, 0, 0, 0.1)",
  },
};

export default Projects;
