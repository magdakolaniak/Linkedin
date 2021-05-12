import { Row, Container, Col, Button } from "react-bootstrap";
import { Component } from "react";
import React from "react";
import ExperienceModal from "./ExperienceModal";
import { CgMathPlus } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";

class Experiences extends React.Component {
  state = {
    expData: [],
    loadingFinished: false,
    isModal: false,
    selectedExp: "none",
  };

  async componentDidMount() {
    console.log("user id is::: ", this.props.userId);
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
        console.log("data: ", data);

        this.setState({ expData: data, loadingFinished: true });
      } else {
        throw new Error("something went wrong with fetching experiences");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.userId !== this.props.userId) {
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
          console.log("data: ", data);

          this.setState({ expData: data, loadingFinished: true });
        } else {
          throw new Error("something went wrong with fetching experiences");
        }
      } catch (error) {
        alert(error.message);
      }
    }
  }

  addNewExp = (newExp) => {
    this.setState({ expData: [...this.state.expData, newExp] });
  };

  testFunction = (e) => {
    console.log(e.target);
  };
  render() {
    return (
      <Container id="experiencesContainer">
        <Row>
          <Col>
            <p id="expTitle">{this.props.title}</p>
          </Col>
          <Col sm={1} className="d-flex justify-content-end pr-1">
            <span id="addBack">
              {this.props.isMe === "me" && (
                <CgMathPlus
                  id="none"
                  className="expIcons"
                  onClick={(e) =>
                    this.setState({ isModal: true, selectedExp: e.target.id })
                  }
                />
              )}
            </span>
          </Col>
        </Row>
        {this.state.expData.map((elem) => {
          return (
            <Row key={elem._id}>
              <Col sm={1}>
                <img src="https://picsum.photos/seed/picsum/65/65" alt=""></img>
              </Col>
              <Col id="descriptions">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p id="position">{elem.role}</p>
                  {this.props.isMe === "me" && (
                    <div>
                      <span className="editBack">
                        <FiEdit2
                          id={elem._id}
                          onClick={(e) =>
                            this.setState({
                              isModal: true,
                              selectedExp: e.target.id,
                            })
                          }
                          className="editIcon"
                        />
                      </span>
                    </div>
                  )}
                </div>
                <p id="school">{elem.company}</p>
                <p id="duration">
                  {elem.startDate} - {elem.endDate ? elem.endDate : "present"}
                </p>
                <hr></hr>
              </Col>
            </Row>
          );
        })}
        <ExperienceModal
          addNewExp={this.addNewExp}
          isModal={this.state.isModal}
          expData={this.state.expData}
          closeModal={() => this.setState({ isModal: false })}
          isMe={this.props.isMe}
          selectedExp={this.state.selectedExp}
        />
      </Container>
    );
  }
}

export default Experiences;
