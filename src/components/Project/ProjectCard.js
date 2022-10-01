import Card from 'react-bootstrap/Card';
import moment from 'moment';
import ProjectCardButtons from './ProjectCardButtons';
import Languages from './Languages';

function ProjectCard(props) {
  const { name, description, link, updatedAt, svnURL, languagesURL } = props;
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <div style={{ fontSize: '0.75rem' }}>
          Developed by <strong className="highlight">Thao Nguyen</strong>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Updated at: </strong>
          {moment(updatedAt).format('MMMM Do, YYYY.')}
        </Card.Text>
        <Card.Text>
          <strong>Languages: </strong>
          {/* <Languages languagesURL={languagesURL} /> */}
        </Card.Text>
        <ProjectCardButtons githubLink={link} svnURL={svnURL} />
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
