import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

export default function Project() {
  const API = 'https://api.github.com';
  const allReposAPI = `${API}/users/ntphuongthao/repos?sort=updated&direction=desc`;

  const [repoList, setRepolist] = useState([]);
  const fetchRepos = async () => {
    try {
      const response = await axios.get(allReposAPI);
      setRepolist([...response.data]);
    } catch (error) {
      console.error(error.message);
    }
  };
  fetchRepos();
  return (
    <Container className="project-container">
      <Row className="project-title">
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
          RECENT PROJECTS
        </h1>
      </Row>
      <Row className="project-row">
        {repoList.map((repo) => {
          if (repo.stargazers_count >= 1) {
            console.log(repo);
            return (
              <Col xs={4} style={{ marginBottom: '2rem' }}>
                <ProjectCard
                  name={repo.name}
                  link={repo.html_url}
                  description={repo.description}
                  updatedAt={repo.updated_at}
                />
              </Col>
            );
          } else {
            return <></>;
          }
        })}
      </Row>
    </Container>
  );
}
