import { Container, Row, Col } from 'react-bootstrap';

export default function ProjectCardButtons(props) {
  const { githubLink, svnURL } = props;
  return (
    <Container>
      <Row>
        <Col xs={4}>
          <form action={githubLink}>
            <input type="submit" value="Link to Github" />
          </form>
        </Col>
        <Col xs={4}>
          <form action={`${svnURL}/archive/master.zip`}>
            <input type="submit" value="Download" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}
