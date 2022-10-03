import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';
import CustomSwitch from '../Home/CustomSwitch';
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
      <Row
        className="project-title"
        style={{ justifyContent: 'space-between' }}
      >
        <Col xs={8}>
          <h1 style={{ display: 'flex', justifyContent: 'start' }}>
            RECENT PROJECTS
          </h1>
        </Col>
        <Col xs={2} style={{ padding: '0px' }}>
          <CustomSwitch />
        </Col>
      </Row>
      <Row className="project-row">
        {repoList.map((repo) => {
          if (repo.stargazers_count >= 1) {
            return (
              <Col key={repo.id} xs={4} style={{ marginBottom: '3.5rem' }}>
                <ProjectCard
                  name={repo.name}
                  link={repo.html_url}
                  description={repo.description}
                  updatedAt={repo.updated_at}
                  svnURL={repo.svn_url}
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
