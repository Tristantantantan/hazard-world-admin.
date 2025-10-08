import { Container, Row, Col } from 'react-bootstrap';
import hazardBg from '../assets/hazard-bg.png';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-section">
        <Container className="about-container">
          <Row className="align-items-center">
            {/* Text Section */}
            <Col xs={12} md={6} className="text-center text-md-start mb-4 mb-md-0">
              <h1 className="about-title">About Hazard World</h1>
              <p className="about-text">
                <strong>Hazard World</strong> is an educational game designed
                for all freshman students to explore their knowledge of how to
                survive in upcoming disasters through an interactive journey.
                Players dive into a dynamic learning adventure to understand
                natural hazards, gaining awareness, knowledge, and practical
                skills to tackle environmental challenges.
              </p>
              <p className="about-text">
                The game immerses students in a 3D environment where they
                encounter realistic scenarios involving typhoons, earthquakes,
                tsunamis, landslides, and volcanic eruptions. Guided by
                non-playable characters, players learn about these natural
                disasters while developing problem-solving skills and hazard
                preparedness.
              </p>
              <p className="about-text">
                To reinforce learning, <strong>Hazard World</strong> integrates
                quizzes after each chapter, encouraging critical thinking and
                solidifying the understanding of the relationship between human
                activities and environmental practices.
              </p>
            </Col>

            {/* Image Section */}
            <Col xs={12} md={6} className="text-center">
              <img
                src={hazardBg}
                alt="Hazard World Screenshot"
                className="img-fluid rounded about-image"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
