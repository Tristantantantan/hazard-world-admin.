import hazardLogo from '../assets/hazard-logo.png';
import Navbar from '../components/Navbar';

export const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="full-screen-bg d-flex align-items-center justify-content-center text-center text-md-start px-3 px-md-5">
        <div className="container">
          <div className="mx-auto mx-md-0" style={{ maxWidth: '480px' }}>
            {/* Responsive and smaller logo */}
            <img
              src={hazardLogo}
              alt="Logo"
              className="img-fluid mb-3"
              style={{ maxWidth: '250px', height: 'auto' }}
            />

            <h4 className="my-4">
              Nature&apos;s Fury. A Volcanologist&apos;s Journey
            </h4>
            <span>
              Venture through perilous regions in search of Mt. Thesaurus&apos;
              hidden treasure.
            </span>

            <div className="mt-4">
              <a
                href="https://drive.google.com/file/d/1X2G4Ds-ao7ci1MEM556SxlxpMzUMYuTj/view?usp=sharing"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>
                Download Game
              </a>
            </div>

            <ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-start mt-3 mb-0">
              <li className="me-3"><span>Android</span></li>
              <li className="me-3"><span>APK</span></li>
              <li><span>338 MB</span></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
