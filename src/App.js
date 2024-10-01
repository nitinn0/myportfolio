import React, { useState } from 'react';
import Header from './Comp/Header';
import { Buttons } from './Comp/Buttons';
import Footer from './Comp/Footer';
import Education from './Comp/Education';
import Honors from './Comp/Honors';
import Projects from './Comp/Projects';

const App = () => {
  const [cardSection, setCardSection] = useState(null);

  const handleSectionClick = (section) => {
    setCardSection(section);
  };

  return (
    <div style={styles.appContainer}>
      <div className="container-fluid my-4" style={styles.content}>
        <div className="row flex" style={{ marginLeft: '0', marginRight: '0' }}>
          <div className="col-md-6 col-sm-12" style={{ paddingLeft: '0', paddingRight: '0' }}>
            <Header />
          </div>

          {/* Card containing buttons and dynamic content */}
          <div
            className="col-md-6 col-sm-12 d-flex flex-column align-items-start justify-content-start"
            style={{
              padding: '20px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              border: '1px solid #ddd',
            }}
          >
            <Buttons onSectionClick={handleSectionClick} />
            <div style={styles.sectionContent}>
              {cardSection === 'education' && <Education />}
              {cardSection === 'honors' && <Honors />}
              {cardSection === 'projects' && <Projects />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
  },
  sectionContent: {
    marginTop: '20px', // Space between buttons and content
    width: '100%', // Ensure it takes up the full card width
  },
};

export default App;
