import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";

class ExperienceModal extends React.Component {
  state = {
    newExperience: {
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      description: "",
      area: "",
    },
    deleteConfirm: false,
  };

  handleChange = (e) => {
    this.setState({
      newExperience: {
        ...this.state.newExperience,
        [e.target.id]: e.target.value,
      },
    });
  };

  submitExperience = async (e) => {
    e.preventDefault();
    this.props.closeModal();
    this.props.addNewExp(this.state.newExperience);

    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.isMe}/experiences`,
        {
          method: "post",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.newExperience),
        }
      );

      if (!response.ok) {
        throw new Error("your new experience didn't uploaded!");
      } else {
        this.closeModal();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  resetState = () => {
    this.setState({
      newExperience: {
        role: "",
        company: "",
        startDate: "",
        endDate: "",
        description: "",
        area: "",
      },
      deleteConfirm: false,
    });
  };

  closeModal = () => {
    this.props.closeModal();
    this.props.onModalClose();
    this.resetState();
  };

  deleteExperience = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6099186a619e5d00151f8f86/experiences/${this.props.selectedExp}`,
        {
          method: "delete",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        this.props.removeExp();
        this.closeModal();
      } else {
        throw new Error("couldn't delete");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    let expData = this.props.expData;
    let selectedExp = this.props.selectedExp;
    let extractedExp = expData.filter((elem) => elem._id === selectedExp);
    // console.log(extractedExp);
    let extractedObj = extractedExp[0];
    // console.log("extracted object: ", extractedObj);
    // let newRole = extractedObj.role;
    // console.log(newRole);

    if (prevState.newExperience === this.state.newExperience && extractedObj) {
      this.setState({
        newExperience: {
          ["role"]: extractedObj.role,
          ["company"]: extractedObj.company,
          ["startDate"]: extractedObj.startDate,
          ["endDate"]: extractedObj.endDate,
          ["description"]: extractedObj.description,
          ["area"]: extractedObj.area,
        },
      });
      console.log("state changed");
    }
  }

  render() {
    return (
      <Modal show={this.props.isModal}>
        {!this.state.deleteConfirm ? (
          <>
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                {this.props.addingMode && "Add new Experience"}
                {this.props.editingMode && "Edit your Experience"}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={(e) => this.submitExperience(e)}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label className="modal-labels-text">Role:</Form.Label>
                    <Form.Control
                      id="role"
                      type="text"
                      placeholder="Your role in company"
                      value={this.state.newExperience.role}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label className="modal-labels-text">
                      Company:
                    </Form.Label>
                    <Form.Control
                      id="company"
                      type="text"
                      placeholder="Company you worked in"
                      value={this.state.newExperience.company}
                      onChange={(e) => this.handleChange(e)}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label className="modal-labels-text">
                    Start Date:
                  </Form.Label>
                  <Form.Control
                    id="startDate"
                    type="datetime-local"
                    value={this.state.newExperience.startDate}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="modal-labels-text">
                    End Date:
                  </Form.Label>
                  <Form.Control
                    id="endDate"
                    type="datetime-local"
                    value={this.state.newExperience.endDate}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="modal-labels-text">
                    Description:
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    id="description"
                    rows={3}
                    value={this.state.newExperience.description}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label className="modal-labels-text">
                    Area of working:
                  </Form.Label>
                  <Form.Control
                    id="area"
                    type="text"
                    placeholder="Place of working"
                    value={this.state.newExperience.area}
                    onChange={(e) => this.handleChange(e)}
                  />
                </Form.Group>

                <Button className="mt-4" variant="success" type="submit">
                  {this.props.addingMode && "Submit your experience"}
                  {this.props.editingMode && "Submit Changes"}
                </Button>
              </Form>
              <Button
                id="skipChanges"
                variant="outline-secondary"
                onClick={() => this.closeModal()}
              >
                Cancel
              </Button>
              {this.props.editingMode && (
                <Button
                  id="deleteExp"
                  variant="danger"
                  onClick={() => this.setState({ deleteConfirm: true })}
                >
                  Delete Experiment
                </Button>
              )}
            </Modal.Body>
          </>
        ) : (
          <>
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Delete Confirmation
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this Experience?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="outline-secondary"
                onClick={() => this.setState({ deleteConfirm: false })}
              >
                Cancel
              </Button>
              <Button variant="danger" onClick={() => this.deleteExperience()}>
                Yes, delete
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    );
  }
}
export default ExperienceModal;
