import { Row, Col } from 'react-bootstrap';
import { FaPython, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiJavascript, SiRubyonrails, SiMysql } from 'react-icons/si';
import { DiRuby } from 'react-icons/di';

export default function TechStack() {
  return (
    <Row className="tech-stack-container">
      <Row sx={12} className="tech-stack-row-container home-title home-center">
        Tech Stack that I use
      </Row>
      <Row className="tech-stack-row-container">
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <FaPython size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <FaJava size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <SiJavascript size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <DiRuby size={60} />
          </div>
        </Col>
      </Row>

      <Row className="tech-stack-row-container">
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <FaNodeJs size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <SiRubyonrails size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <FaReact size={60} />
          </div>
        </Col>
        <Col xs={3} className="home-center">
          <div className="tech-stack-icon">
            <SiMysql size={60} />
          </div>
        </Col>
      </Row>
    </Row>
  );
}
