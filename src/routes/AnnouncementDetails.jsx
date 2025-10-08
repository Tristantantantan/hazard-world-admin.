import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getAnnouncements } from '../services/announcementService';
import { Container, Card, Button, Spinner } from 'react-bootstrap';
import Navbar from '../components/Navbar';

const AnnouncementDetails = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const data = await getAnnouncements();
        const found = data.find((item) => item.id === id);
        setAnnouncement(found);
      } catch (error) {
        console.error('Error fetching announcement:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncement();
  }, [id]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="announcement-details-loading d-flex align-items-center justify-content-center">
          <Spinner animation="border" variant="light" />
        </div>
      </>
    );
  }

  if (!announcement) {
    return (
      <>
        <Navbar />
        <div className="announcement-details-empty text-center text-light mt-5">
          <h5>Announcement not found</h5>
          <Button variant="secondary" onClick={() => navigate('/announcements')}>
            Back to Announcements
          </Button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="announcement-details-section">
        <Container className="py-5">
          <Card className="announcement-details-card mx-auto shadow-sm">
            <Card.Body>
              <Card.Title className="fw-bold mb-3 text-center">
                {announcement.title}
              </Card.Title>
              <Card.Text className="announcement-details-text">
                {announcement.body}
              </Card.Text>
              <div className="text-center mt-4">
                <Button
                  variant="outline-light"
                  className="px-4"
                  onClick={() => navigate('/announcements')}
                >
                  Back
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default AnnouncementDetails;
