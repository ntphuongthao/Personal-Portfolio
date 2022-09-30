import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { BsPhoneVibrateFill } from 'react-icons/bs';

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col className="modifyFontsize" xs={6}>
          Developed and Designed by Thao Nguyen
        </Col>
        <Col className="modifyFontsize" xs={3}>
          Copyright © {year} SB
        </Col>
        <Col className="modifyFontsize" xs={3}>
          <Row>
            <Col>
              <a
                href="https://github.com/ntphuongthao"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </Col>
            <Col>
              <a
                href="https://www.linkedin.com/in/nguyentpthao/"
                style={{ color: 'white' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </Col>
            <Col xs={6}>
              <BsPhoneVibrateFill /> : (+1) 812-225-2941
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
