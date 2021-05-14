import { Col, Row, Container } from 'react-bootstrap';
import Interests from './Interests';
import LateralProfiles from './LateralProfiles';
import Feeds from './Feeds';

const Home = () => (
  <Container className="home-main-container">
    <Row>
      <Col md={2}></Col>
      <Col md={7}>
        <Feeds />
      </Col>
      <Col md={3}>
        <LateralProfiles />
      </Col>
    </Row>
  </Container>
);
export default Home;
