import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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
          Technologies
        </Col>
      </Row>
    </Container>
  );
}
