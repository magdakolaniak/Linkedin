import { Row, Container, Col } from "react-bootstrap";
import { Component } from "react";

class Experiences extends Component {
  state = {
    slicedData: [],
    loadingFinished: false,
    noExperience: false,
  };

  async componentDidMount() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();

        if (data.lengh > 0) {
          let sliced = data.slice(0, 6);
          this.setState({ slicedData: sliced, loadingFinished: true });
          console.log(sliced);
        } else {
          this.setState({ noExperience: true });
        }
      } else {
        throw new Error("something went wrong with fetching experiences");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    return (
      <Container id="experiencesContainer">
        <p id="expTitle">{this.props.title}</p>
        {this.state.loadingFinished &&
          this.state.slicedData.lengh >
            0(
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
            )}
      </Container>
    );
  }
}

export default Experiences;
