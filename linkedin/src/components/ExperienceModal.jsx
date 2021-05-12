import React from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';

class ExperienceModal extends React.Component {
  render() {
    return (
      <Modal show={this.props.isModal}>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new Experience
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label className="modal-labels-text">Role:</Form.Label>
                <Form.Control
                  id="role"
                  type="text"
                  placeholder="Your role in company"
                  value={this.props.expDetails.role}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="modal-labels-text">Company:</Form.Label>
                <Form.Control
                  id="company"
                  type="text"
                  placeholder="Company you worked in"
                  value={this.props.expDetails.role}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label className="modal-labels-text">Start Date:</Form.Label>
              <Form.Control
                id="startDate"
                type="datetime-local"
                value={this.props.expDetails.startDate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-labels-text">End Date:</Form.Label>
              <Form.Control
                id="endDate"
                type="datetime-local"
                value={this.props.expDetails.endDate}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="modal-labels-text">
                Description:
              </Form.Label>
              <Form.Control as="textarea" id="description" rows={3} />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className="modal-labels-text">
                Area of working:
              </Form.Label>
              <Form.Control
                id="area"
                type="text"
                placeholder="Place of working"
              />
            </Form.Group>

            <Button className="mt-4" variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Modal.Footer>
            <Button variant="danger" onClick={() => this.props.closeModal()}>
              Skip changes
            </Button>
          </Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default ExperienceModal;
