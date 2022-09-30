import { Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <Row className="social-media-container">
      <Row
        sx={12}
        className="social-media-row-container home-title home-center"
      >
        My Social Platforms
      </Row>
      <Row sx={12} className="social-media-row-container">
        <Col className="home-center">
          <div>
            <a
              href="https://github.com/ntphuongthao"
              style={{ color: 'white' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={60} />
            </a>
          </div>
        </Col>
        <Col className="home-center">
          <div>
            <a
              href="https://www.linkedin.com/in/nguyentpthao/"
              style={{ color: 'white' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={60} />
            </a>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
