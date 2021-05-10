import { Row, Container, Col } from "react-bootstrap";

const Experiences = (props) => {
  return (
    <Container id="experiencesContainer">
      <p id="expTitle">{props.title}</p>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/450/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">Teaching Assistant</p>
          <p id="school">Strive School</p>
          <p id="duration">October 2020 - Present . 8 mos</p>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/110/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">UX Designer</p>
          <p id="school">Clispo</p>
          <p id="duration">October 2020 - Present . 8 mos</p>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/113/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">iOS Developer</p>
          <p id="school">Freelance</p>
          <p id="duration">October 2020 - Present . 8 mos</p>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/11/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">Sound Engineer</p>
          <p id="school">JAMBOX Entertainment</p>
          <p id="duration">October 2020 - Present . 8 mos</p>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col sm={1}>
          <img src="https://picsum.photos/id/512/64/64"></img>
        </Col>
        <Col id="descriptions">
          <p id="position">Teaching Assistant</p>
          <p id="school">Strive School</p>
          <p id="duration">October 2020 - Present . 8 mos</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Experiences;
