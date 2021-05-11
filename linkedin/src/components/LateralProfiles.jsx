import { Button, Nav } from 'react-bootstrap';
import '../index.css';
import ProfileImg from './ProfileImg.jpeg';
import React from 'react';
import { withRouter } from 'react-router-dom';

class LateralProfiles extends React.Component {
  state = {
    profile: {},
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/profile/',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MjRhNDYxOWU1ZDAwMTUxZjhmODciLCJpYXQiOjE2MjA2NDkxMjQsImV4cCI6MTYyMTg1ODcyNH0.15CJxLNt1zq17Dn6MlvL8BGiDpMkFLJe7HLxE-St3AM',
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          profile: data,
          isLoading: false,
        });
      } else {
        console.log('houston we got an error');
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  render() {
    return (
      <div id="lateral-profile-main-container">
        <h3 id="lateral-profile-section-title" className="mb-4 mt-2">
          Profiles you may know..
        </h3>
        {!this.state.isLoading &&
          this.state.profile.slice(0, 5).map((item) => (
            <div key={item._id} id="lateral-profile" className="d-flex mt-3">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ display: 'inline' }}
              >
                <img src={item.image} alt="" id="lateral-profile-user-image" />
              </div>

              <div style={{ display: 'inline' }} id="lateral-profile-info-box">
                <h3 id="lateral-profile-username">
                  <Nav.Link
                    id="lateral-profile-username-link"
                    onClick={() =>
                      this.props.history.push('/userprofile/' + item._id)
                    }
                  >
                    {item.name} {item.surname}
                  </Nav.Link>
                  {item.name}

                  <span id="lateral-profile-name-grade-separator"> - </span>
                  <span>1°</span>
                </h3>
                <p id="lateral-profile-user-title">{item.title}</p>
                <Button variant="primary" id="later-profile-follow-button">
                  Follow
                </Button>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default withRouter(LateralProfiles);
