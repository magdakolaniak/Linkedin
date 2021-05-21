import { Nav, Button, Modal } from "react-bootstrap";
import "../index.css";
import React from "react";
import { FaImage } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

class CreatePost extends React.Component {
  state = {
    profile: {},
    isLoading: true,
    show: false,
    profileData: {},
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/6099186a619e5d00151f8f86",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk5MjRhNDYxOWU1ZDAwMTUxZjhmODciLCJpYXQiOjE2MjA2NDkxMjQsImV4cCI6MTYyMTg1ODcyNH0.15CJxLNt1zq17Dn6MlvL8BGiDpMkFLJe7HLxE-St3AM",
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
        console.log("houston we got an error");
        this.setState({ isError: true, isLoading: false });
      }
    } catch (error) {
      console.log(error);
      this.setState({ isError: true, isLoading: false });
    }
  };

  /* handleModal() {
    this.setState({ show: true });
  } */

  render() {
    return (
      <>
        <div id="feed-post-main-container">
          <div id="feed-post" className="d-flex">
            <div
              className="d-flex align-items-center justify-content-center"
              style={{ display: "inline" }}
            >
              <img
                src={this.profileData.image}
                alt=""
                id="feed-post-user-image"
              />
            </div>

            <div style={{ display: "inline" }} id="feed-post-info-box">
              <Button
                onclick={() => console.log("test-click")}
                className="create-post-input flex-grow"
              >
                Start a post...
              </Button>
              <Modal show={this.state.show}>
                <Modal.Header>Add a new post...</Modal.Header>
                <Modal.Body>
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ display: "inline" }}
                    >
                      <img
                        src={this.state.profileData.image}
                        alt=""
                        id="feed-post-user-image"
                      />
                    </div>
                    <div id="feed-post-info-box">
                      {/* <span className="post-post-username">
              {this.state.profileData.name} {this.state.profileData.surname}{" "}
              <span>
                <FaAngleDown className="icon-post" />
              </span>
            </span> */}
                      <span className="post-post-username">
                        <span>
                          <FaGlobeAmericas className="icon-post" />
                        </span>
                        <span>All</span>
                        <span>
                          <FaAngleDown className="icon-post" />
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="insert-post-text-input"
                      placeholder="What do you want to write?"
                    />
                    <h3 className="add-hashtag-post">Add an Hashtag</h3>
                  </div>
                  <div>
                    <ul className="d-flex list-icons-post">
                      <li>
                        <FaPlus className="icon-post icon-post-post" />
                      </li>
                      <li>
                        <FaImage className="icon-post icon-post-post" />
                      </li>
                      <li>
                        <FaPlayCircle className="icon-post icon-post-post" />
                      </li>
                      <li>
                        <FaRegFileAlt className="icon-post icon-post-post" />
                      </li>
                    </ul>
                  </div>
                </Modal.Body>
                <Modal.Footer></Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <span className="feeds-group-icons-like">
              <FaImage className="feeds-icons-bottom feeds-icons-bottom-photo" />{" "}
              <span>Photo</span>
            </span>
            <span className="feeds-group-icons">
              <FaPlayCircle className="feeds-icons-bottom feeds-icons-bottom-video" />
              <span className="text-comment">Video</span>
            </span>
            <span className="feeds-group-icons">
              <FaCalendarAlt className="feeds-icons-bottom feeds-icons-bottom-event" />{" "}
              <span>Event</span>{" "}
            </span>
            <span className="feeds-group-icons">
              <FaNewspaper className="feeds-icons-bottom feeds-icons-bottom-article" />{" "}
              <span>Article</span>
            </span>
          </div>
        </div>
      </>
    );
  }
}

export default CreatePost;
