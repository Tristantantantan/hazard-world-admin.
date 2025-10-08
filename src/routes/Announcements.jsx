import React, { useEffect, useState } from 'react';
import { Card, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { getAnnouncements } from '../services/announcement';

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const data = await getAnnouncements();
        setAnnouncements(data);
      } catch (error) {
        console.error('Error fetching announcements:', error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleViewAnnouncement = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAnnouncement(null);
  };

  return (
    <>
      <Navbar />
      <div className="announcements-section">
        <Container className="py-5">
          <h1 className="announcements-title text-center mb-4">
            Announcements
          </h1>
          <Row>
            {announcements.length > 0 ? (
              announcements.map(({ id, title, body }) => (
                <Col key={id} xs={12} sm={6} md={4} className="mb-4">
                  <Card className="announcement-card h-100 shadow-sm">
                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="fw-bold mb-2">{title}</Card.Title>
                      <Card.Text className="flex-grow-1 text-muted">
                        {body.length > 100
                          ? `${body.substring(0, 100)}...`
                          : body}
                      </Card.Text>
                      <Button
                        variant="primary"
                        onClick={() =>
                          handleViewAnnouncement({ id, title, body })
                        }
                        className="mt-auto w-100"
                      >
                        View More
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col>
                <p className="text-center text-light">
                  No announcements available.
                </p>
              </Col>
            )}
          </Row>

          {/* Modal */}
          <Modal
            show={showModal}
            onHide={handleCloseModal}
            centered
            className="announcement-modal"
          >
            <Modal.Header closeButton>
              <Modal.Title className="modal-title-sm">
                {selectedAnnouncement?.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body-sm">
              <p>{selectedAnnouncement?.body}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                size="sm"
                className="w-100"
                onClick={handleCloseModal}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </div>
    </>
  );
};

export default Announcements;
