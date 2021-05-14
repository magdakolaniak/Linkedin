import { Component } from "react";
import Header from "./Header";
import Experiences from "./Experiences";
import Interests from "./Interests";
import { Container, Row, Col, ThemeProvider } from "react-bootstrap";
import LateralProfiles from "./LateralProfiles";

class Profile extends Component {
  state = {
    profileData: {},
    loadingFinished: false,
    idFromUrl: "",
  };

  async fetchProfiles() {
    console.log("id: ", this.state.idFromUrl);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.match.params.userId}`,

        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log("data  ", data);
        this.setState({
          profileData: data,
          loadingFinished: true,
        });
        // console.log(this.state.profileData);
      } else {
        throw new Error("something went wrong");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  componentDidMount() {
    this.setState({
      idFromUrl: this.props.match.params.userId,
    });
    this.fetchProfiles();
  }

  componentDidUpdate = () => {
    let newId = this.props.match.params.userId;

    if (newId !== this.state.idFromUrl) {
      // if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.setState({
        idFromUrl: this.props.match.params.userId,
      });
      this.fetchProfiles();
    }
    // }
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.idFromUrl !== this.state.idFromUrl) {
  //     this.fetchProfiles();
  //   }
  // };

  render() {
    return (
      <Container id="mainContent">
        <Row>
          <Col md={8}>
            {this.state.loadingFinished && (
              <Header profileData={this.state.profileData} />
            )}
            {this.state.loadingFinished && (
              <Experiences
                title="Experience"
                isMe={this.props.match.params.userId}
                userId={this.state.profileData._id}
              />
            )}
            <Interests title="Interests" />
          </Col>
          <Col md={4}>
            <LateralProfiles />
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Profile;
