import { Container, Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import TechStack from './TechStack';

export default function Home() {
  return (
    <Container className="home">
      <Row>
        <Col xs={9}>
          <Row>
            Hi, I'm Thao Nguyen - a Vietnamese sophomore at DePauw University.
            Working toward a career in Software Engineering.
          </Row>
          <Row md={{ offset: 1 }}>
            Developer with experience in JavaScript/SERN
            (SQL-Express.js-React.js-Node.js), Ruby/Ruby on Rails, Databases,
            Git/Github.
          </Row>
        </Col>
        <Col md={{ offset: 1 }}>
          <FaLaptopCode size={170} />
        </Col>
      </Row>
      <TechStack />
    </Container>
  );
}
