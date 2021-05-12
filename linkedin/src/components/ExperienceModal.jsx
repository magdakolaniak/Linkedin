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
    console.log("extracted object: ", extractedObj);
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
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new Experience
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
                <Form.Label className="modal-labels-text">Company:</Form.Label>
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
              <Form.Label className="modal-labels-text">Start Date:</Form.Label>
              <Form.Control
                id="startDate"
                type="datetime-local"
                value={this.state.newExperience.startDate}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-labels-text">End Date:</Form.Label>
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
              Submit
            </Button>
          </Form>
          <Button
            id="skipChanges"
            variant="danger"
            onClick={() => this.props.closeModal()}
          >
            Skip changes
          </Button>
        </Modal.Body>
      </Modal>
    );
  }
}
export default ExperienceModal;
