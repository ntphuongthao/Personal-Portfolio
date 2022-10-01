import { Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import CustomSwitch from './CustomSwitch';
import AutoPosition from './AutoPosition';

export default function Introduction() {
  return (
    <Row>
      <Col xs={9}>
        <Row className="light-color">
          Hi, I'm Thao Nguyen - a Vietnamese sophomore at DePauw University.
          Working toward a career in Software Engineering.
        </Row>
        <Row className="light-color" md={{ offset: 1 }}>
          Developer with experience in JavaScript/SERN
          (SQL-Express.js-React.js-Node.js), Ruby/Ruby on Rails, Databases,
          Git/Github.
        </Row>
      </Col>
      <Col md={{ offset: 1 }}>
        <FaLaptopCode className="light-color" size={170} />
        <Row>
          <AutoPosition />
        </Row>
        <Row>
          <CustomSwitch />
        </Row>
      </Col>
    </Row>
  );
}
