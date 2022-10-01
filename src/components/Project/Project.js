import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Project() {
  const projects = [
    {
      name: 'Flight Booking',
      link: 'https://github.com/ntphuongthao/Flight-Booking',
      description:
        'This project will replicate a one-way flight booker, allowing users to browse their flight with origin, destination, datetime, and the number of tickets.',
    },
    {
      name: 'Facebook',
      link: 'https://github.com/ntphuongthao/Facebook',
      description:
        "There are partial mockups of Facebook functions in this project. This project involved 4 main models: Users, Posts, Comments, and Likes. The following advanced features were implemented to increase the complexity and flexibility of this project - such as 'friending, friend request, login with real Facebook/Github account, feeding with all your posts and your friends' posts'",
    },
  ];
  return (
    <Container className="project-container">
      <Row className="project-row">
        {projects.map((project) => (
          <Col>
            <ProjectCard
              name={project.name}
              link={project.link}
              description={project.description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
