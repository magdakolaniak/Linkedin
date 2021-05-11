import { Row, Container, Col } from "react-bootstrap";
import { Component } from "react";

class Experiences extends Component {
  render() {
    return (
      <Container id="experiencesContainer">
        <p id="expTitle">{this.props.title}</p>
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
      </Container>
    );
  }
}

export default Experiences;
