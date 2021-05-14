import { Nav } from "react-bootstrap";
import "../index.css";
import React from "react";
import { withRouter } from "react-router-dom";
import PostImg from "./maxresdefault.jpg";

class FeedPost extends React.Component {
  state = {
    post: {},
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
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

  render() {
    return (
      <>
        {!this.state.isLoading &&
          this.state.profile.slice(0, 10).map((item) => (
            <div id="feed-post-main-container">
              <div key={item._id} id="feed-post" className="d-flex">
                <div
                  className="d-flex align-items-center justify-content-center"
                  style={{ display: "inline" }}
                >
                  <img src={item.user.image} alt="" id="feed-post-user-image" />
                </div>

                <div style={{ display: "inline" }} id="feed-post-info-box">
                  <h3 id="feed-post-username">
                    <Nav.Link
                      id="feed-post-username-link"
                      onClick={() =>
                        this.props.history.push("/userprofile/" + item._id)
                      }
                    ></Nav.Link>
                    {item.user.name} {item.user.surname}
                    <span id="feed-post-name-grade-separator"> - </span>
                    <span>1°</span>
                  </h3>
                  <p id="">{item.user.title}</p>
                </div>
              </div>
              <div>
                <p id="feed-post-post-paragraph">{item.text}</p>
              </div>
              <div>
                <div>
                  <img src={item.image} alt="" id="feed-post-img" />
                  <div id="feed-post-img-banner">
                    <h3 id="">{item.text}</h3>
                    <p id="">
                      <span>www.medium.com</span>
                      <span id="feed-post-name-grade-separator"> - </span>
                      <span>4 min reading</span>
                    </p>
                  </div>
                </div>
                <div id="feed-post-likes-bar">
                  <ul id="like-icons-list" className="d-flex">
                    <li className="like-icon">Like</li>
                    <li className="like-icon">Lamp</li>
                    <li className="like-icon">Clap</li>
                    <li className="feed-post-n-likes">N. of likes</li>
                  </ul>
                </div>
                <div id="feed-post-like-comment-bar">
                  <ul id="like-icons-list" className="d-flex">
                    <li>Like</li>
                    <li>Comment</li>
                    <li>Share</li>
                    <li>Send</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }
}

export default FeedPost;
