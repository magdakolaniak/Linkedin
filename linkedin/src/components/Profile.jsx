import { Component } from "react";
import Header from "./Header";
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";

class Profile extends Component {
  state = {
    profileData: {},
    loadingFinished: false,
  };

  async componentDidMount() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        this.setState({ profileData: data, loadingFinished: true });
        console.log(this.state.profileData);
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  render() {
    return (
      <Container id="mainContent">
        <Row>
          <Col md={8}>
            {this.state.loadingFinished && (
              <Header profileData={this.state.profileData} />
            )}
          </Col>
          <Col md={4}>
            <h1>hello</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;