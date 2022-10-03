import { Container, Row, Col } from 'react-bootstrap';
import DownloadButton from './DownloadButton';
import CustomSwitch from '../Home/CustomSwitch';

export default function Resume() {
  return (
    <Container>
      <Row className="resume-row">
        <Col xs={2} style={{ padding: '0px', marginTop: '2rem' }}>
          <CustomSwitch />
        </Col>
      </Row>
      <Row className="resume-row">
        <DownloadButton />
      </Row>

      <Row></Row>

      <Row className="resume-row">
        <DownloadButton />
      </Row>
    </Container>
  );
}
