import Card from 'react-bootstrap/Card';
import moment from 'moment';

function ProjectCard(props) {
  const { name, description, link, updatedAt } = props;
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          <h2>{name}</h2>
        </Card.Title>
        <h6>
          Developed by <strong className="highlight">Thao Nguyen</strong>
        </h6>
      </Card.Header>
      <Card.Body>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Updated at: </strong>
          {moment(updatedAt).format('MMMM Do, YYYY.')}
        </Card.Text>
        <form action={link}>
          <input type="submit" value="Link to Github" />
        </form>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
