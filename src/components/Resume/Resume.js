import { Container, Row } from 'react-bootstrap';
import DownloadButton from './DownloadButton';

export default function Resume() {
  return (
    <Container>
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
