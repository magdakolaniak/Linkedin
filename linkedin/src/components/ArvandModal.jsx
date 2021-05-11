import { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class ArvandModal extends Component {
  render() {
    return (
      <Modal show={this.props.isModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.switchModal}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ArvandModal;
