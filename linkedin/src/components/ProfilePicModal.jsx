import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ProfilePicModal extends Component {
  state = {
    picture: "",
  };

  handleUpload = async () => {
    this.props.toggleModal();
    try {
      let formData = new FormData();
      formData.append("profile", this.state.picture);
      // console.log(formData)

      let response2 = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/6099186a619e5d00151f8f86/picture`,
        {
          method: "post",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0",
          },
          body: formData,
        }
      );

      if (!response2.ok) {
        throw new Error("profile picture didn't uploaded");
      } else {
        alert("your profile picture uploaded successfully");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  render() {
    return (
      <Modal show={this.props.isEditingPic}>
        <Modal.Header>
          <Modal.Title>Modify profile image</Modal.Title>
        </Modal.Header>
        <Modal.Body>Choose your profile image:</Modal.Body>
        <label className="custom-file-upload">
          <input
            id="profilePicInput"
            type="file"
            multiple
            onChange={(e) => this.setState({ picture: e.target.files[0] })}
          />
        </label>

        <Modal.Footer>
          <Button
            variant="outline-secondary"
            onClick={() => this.props.toggleModal()}
          >
            Close
          </Button>
          <Button variant="primary" onClick={() => this.handleUpload()}>
            Upload Image
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ProfilePicModal;
