import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Project() {
  return (
    <Container className="project-container">
      <Row className="project-row">
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
      </Row>

      <Row className="project-row">
        <Col>
          <ProjectCard />
        </Col>
        <Col>
          <ProjectCard />
        </Col>
      </Row>
    </Container>
  );
}
