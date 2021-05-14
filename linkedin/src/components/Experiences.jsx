import { Row, Container, Col, Button } from "react-bootstrap";
import { Component } from "react";
import React from "react";
import ExperienceModal from "./ExperienceModal";
import { CgMathPlus } from "react-icons/cg";
import { FiEdit2 } from "react-icons/fi";
import { format, parseISO } from "date-fns";

class Experiences extends React.Component {
  state = {
    expData: [],
    loadingFinished: false,
    isModal: false,
    selectedExp: "none",
    editingMode: false,
    addingMode: false,
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

  onModalClose = () => {
    this.setState({
      editingMode: false,
      addingMode: false,
    });
  };

  addNewExp = (newExp) => {
    this.setState({ expData: [...this.state.expData, newExp] });
  };

  dateHandler = (date) => {
    let realDate = parseISO(date);
    let formatedDate = format(realDate, "MMM, yyyy");
    return formatedDate;
  };

  removeExp = () => {
    let filteredExp = this.state.expData.filter(
      (elem) => elem._id !== this.state.selectedExp
    );
    this.setState({ expData: [...filteredExp] });
  };

  updateExp = (exp) => {
    let updatedExp = this.state.expData.map((elem) => {
      if (elem._id === this.state.selectedExp) {
        elem.role = exp.role;
        elem.company = exp.company;
        elem.startDate = exp.startDate;
        elem.endDate = exp.endDate;
        elem.description = exp.description;
        elem.area = exp.area;
      }
    });
    // this.setState({ expData: [...updatedExp] });
    console.log("updatedExp ", updatedExp);
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
                    this.setState({
                      isModal: true,
                      selectedExp: e.target.id,
                      addingMode: true,
                    })
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
                <img id="experiencePicture" src={elem.image} alt=""></img>
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
                              editingMode: true,
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
                  {this.dateHandler(elem.startDate)} -{" "}
                  {elem.endDate ? this.dateHandler(elem.endDate) : " present"}
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
          editingMode={this.state.editingMode}
          addingMode={this.state.addingMode}
          onModalClose={this.onModalClose}
          removeExp={this.removeExp}
          updateExp={this.updateExp}
        />
      </Container>
    );
  }
}

export default Experiences;
