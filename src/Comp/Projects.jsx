const Projects = () => {
  return (
    <div style={styles.cardProject}>
      <div style={styles.flexContainer}>
        <a
          href="https://youtu.be/DMnZTRnDkeg?si=vCxDdsbWNGmCMPpw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={`${process.env.PUBLIC_URL}/image.png`}
            alt="Thumbnail"
            style={styles.image}
          />
        </a>
        <div style={styles.textContainer}>
          <h5>Citrus Fruits</h5>
          <p>
            Citrus Fruits is a platform that helps local fruit and vegetable sellers deliver fresh produce directly to customers’ doorsteps, providing a seamless experience for both vendors and consumers looking for high-quality, farm-fresh products.
          </p>
        </div>
      </div>
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
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '130px',
    height: '120px',
    borderRadius: '50%',
    marginRight: '20px',
  },
  textContainer: {
    flex: 1,
  },
};

export default Projects;
