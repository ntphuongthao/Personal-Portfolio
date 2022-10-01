import { Row, Col } from 'react-bootstrap';
import { FaLaptopCode } from 'react-icons/fa';
import CustomSwitch from './CustomSwitch';
import AutoPosition from './AutoPosition';

export default function Introduction() {
  return (
    <Row>
      <Col xs={9}>
        <Row className="light-color">
          <h4>
            Hi, I'm Thao Nguyen - a Vietnamese sophomore at{' '}
            <strong className="highlight">DePauw University</strong>. Working
            toward a career in{' '}
            <strong className="highlight">Software Engineering</strong>.
            <br />
          </h4>
        </Row>
        <Row className="light-color" md={{ offset: 1 }}>
          <h4>
            <strong className="highlight">Developer</strong> with experience in{' '}
            <strong className="highlight">JavaScript/MERN</strong>{' '}
            (MongoDB-Express.js-React.js-Node.js) , Ruby/Ruby on Rails,
            Databases, Git/Github.
          </h4>
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
