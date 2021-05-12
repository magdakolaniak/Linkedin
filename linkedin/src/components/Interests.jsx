import { Row, Container, Col } from 'react-bootstrap';

const Interests = (props) => {
  return (
    <Container id="experiencesContainer">
      <p id="expTitle">{props.title}</p>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/12/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">Teaching Assistant</p>
          <p id="school">Strive School</p>
        </Col>
        <Col sm={1}>
          <img src="https://picsum.photos/id/960/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">Teaching Assistant</p>
          <p id="school">Strive School</p>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/54/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">UX Designer</p>
          <p id="school">Clispo</p>
        </Col>
        <Col sm={1}>
          <img src="https://picsum.photos/id/141/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">UX Designer</p>
          <p id="school">Clispo</p>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/93/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">iOS Developer</p>
          <p id="school">Freelance</p>
        </Col>
        <Col sm={1}>
          <img src="https://picsum.photos/id/113/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">iOS Developer</p>
          <p id="school">Freelance</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Interests;
