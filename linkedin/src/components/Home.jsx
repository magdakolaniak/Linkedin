import { Col, Row, Container } from "react-bootstrap";

import LateralProfiles from "./LateralProfiles";
import Feeds from "./Feeds";

const Home = () => (
  <Container className="home-main-container">
    <Row>
      <Col md={8}>
        <Feeds />
      </Col>
      <Col md={4} style={{ marginTop: "20px" }}>
        <LateralProfiles />
      </Col>
    </Row>
  </Container>
);
export default Home;
