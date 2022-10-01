import { Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function SocialMedia() {
  return (
    <Row className="social-media-container">
      <Row
        sx={12}
        className="social-media-row-container home-title home-center"
      >
        <div className="home-center">
          <h1>
            My <strong className="highlight">Social Platforms</strong>
          </h1>
        </div>
      </Row>
      <Row sx={12} className="social-media-row-container">
        <Col className="home-center">
          <div>
            <a
              href="https://github.com/ntphuongthao"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-light"
            >
              <AiFillGithub size={60} />
            </a>
          </div>
        </Col>
        <Col className="home-center">
          <div>
            <a
              href="https://www.linkedin.com/in/nguyentpthao/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-media-light"
            >
              <AiFillLinkedin size={60} />
            </a>
          </div>
        </Col>
      </Row>
    </Row>
  );
}
