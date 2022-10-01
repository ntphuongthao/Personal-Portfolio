import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  const { name, description } = props;
  return (
    <Card>
      <Card.Header>{name}</Card.Header>
      <Card.Body>
        <Card.Title>By Thao Nguyen</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary">Github</Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
