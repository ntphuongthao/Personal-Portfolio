import { Container } from 'react-bootstrap';
import TechStack from './TechStack';
import Introduction from './Introduction';
import SocialMedia from './SocialMedia';

export default function Home() {
  return (
    <Container className="home">
      <Introduction />
      <TechStack />
      <SocialMedia />
    </Container>
  );
}
