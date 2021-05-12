import { Row, Container, Col, Button } from 'react-bootstrap';

import React from 'react';
import ExperienceModal from './ExperienceModal';

class Experiences extends React.Component {
  state = {
    expData: [],
    loadingFinished: false,
    isModal: false,
  };

  async componentDidMount() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${this.props.userId}/experiences`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MTg2YTYxOWU1ZDAwMTUxZjhmODYiLCJpYXQiOjE2MjA2NDU5OTQsImV4cCI6MTYyMTg1NTU5NH0.CDHfsm4R57ghD9yYwMqF32cuot43P72UHjId5uHn8l0',
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log('data: ', data);

        this.setState({ expData: data, loadingFinished: true });
      } else {
        throw new Error('something went wrong with fetching experiences');
      }
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    return (
      <Container id="experiencesContainer">
        <p id="expTitle">{this.props.title}</p>
        {this.state.expData.map((elem) => {
          return (
            <Row key={elem._id}>
              <Col sm={1}>
                <img src="https://picsum.photos/seed/picsum/65/65" alt=""></img>
              </Col>
              <Col id="descriptions">
                <p id="position">{elem.role}</p>
                <p id="school">{elem.company}</p>
                <p id="duration">
                  {elem.startDate} - {elem.endDate ? elem.endDate : 'present'}
                </p>
                <hr></hr>
              </Col>
            </Row>
          );
        })}
        <ExperienceModal
          isModal={this.state.isModal}
          expDetails={this.state.expData}
          closeModal={() => this.setState({ isModal: false })}
        />
        <Button onClick={() => this.setState({ isModal: true })}>
          {' '}
          Add new experience
        </Button>
      </Container>
    );
  }
}

export default Experiences;
