import './Project.css';

const Projects = () => {
  return (
    <>
      <div className="cardProject">
        <div className="flexContainer">
          <a
            href="https://youtu.be/DMnZTRnDkeg?si=vCxDdsbWNGmCMPpw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={`${process.env.PUBLIC_URL}/image.png`}
              alt="Thumbnail"
              className="image"
            />
          </a>
          <div className="textContainer">
            <h5>Citrus Fruits</h5>
            <p>
              Citrus Fruits is a platform that helps local fruit and vegetable
              sellers deliver fresh produce directly to customers’ doorsteps,
              providing a seamless experience for both vendors and consumers
              looking for high-quality, farm-fresh products.
            </p>
          </div>
        </div>
      </div>

      <div className="cardProject">
        <div className="flexContainer">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/image1.png`}
              alt="Thumbnail"
              className="image"
            />
          </a>
          <div className="textContainer">
            <h5>Indian Football Team</h5>
            <p>
              I built this landing page for the All India Football Federation
              (AIFF) to help connect fans with the world of Indian football,
              fostering national pride and community support. The site helps
              engage a larger audience, making it easy for fans to stay updated
              on team news, and player updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
