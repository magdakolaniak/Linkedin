import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { withRouter, Link } from 'react-router-dom';
import { IoMdGlobe } from 'react-icons/io';
import { FeedsDate } from './FeedsDate.js';
import { AiOutlineLike } from 'react-icons/ai';
import { FaRegCommentDots, FaHandHoldingHeart } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';
import { FiSend } from 'react-icons/fi';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { HiLightBulb } from 'react-icons/hi';
import { GiShakingHands } from 'react-icons/gi';

class Feeds extends React.Component {
  state = {
    posts: [],
    isLoading: true,
  };

  componentDidMount = async () => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/ ',
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk4ZWEzYzYxOWU1ZDAwMTUxZjhmN2EiLCJpYXQiOjE2MjA2MzQxNzMsImV4cCI6MTYyMTg0Mzc3M30.hEmaEoc8L6x23Ze-iwMF6duSB6oG5j4DZadGidhycKs',
          },
        }
      );

      if (response.ok) {
        let data = await response.json();
        console.log(data);

        this.setState({
          posts: data,
          isLoading: false,
        });
      } else {
        console.log('Error while getting response');
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
          this.state.posts.slice(599, 608).map((post) => (
            <Container className="feeds-main-container" key={post._id}>
              <BiDotsHorizontalRounded className="feeds-main-dots" />
              <Row>
                <Col sm={1}>
                  <img
                    className="feeds-user-image"
                    src={post.user.image}
                    alt=""
                  />
                </Col>
                <Col sm={8} className="mr-auto">
                  <Link className="feeds-profile-username-link">
                    {post.user.name} {post.user.surname}
                  </Link>

                  <div className="feeds-user-text text-muted">
                    {post.user.title}
                    <div>
                      {FeedsDate(post.user.createdAt)}{' '}
                      <IoMdGlobe className="feeds-icons" />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <div className="feeds-user-post mt-3 mb-5">"{post.text}"</div>
                {post.image && (
                  <img
                    src={post.image}
                    className="feeds-post-image"
                    alt="..."
                  />
                )}
              </Row>
              <Row>
                <hr></hr>
                <span>
                  <span className="feeds-group-icons-like">
                    <AiOutlineLike className="feeds-icons-bottom" />{' '}
                    <span>like</span>
                  </span>
                  <div className="feeds-like-reactions">
                    <span className="feeds-heart-style ">
                      <FcLike />
                    </span>
                    <span className="feeds-heart-hand-style">
                      <FaHandHoldingHeart />
                    </span>
                    <span className="feeds-bulb-style">
                      <HiLightBulb />
                    </span>
                    <span className="feeds-hands-style">
                      <GiShakingHands />
                    </span>
                  </div>
                  <span className="feeds-group-icons">
                    <FaRegCommentDots className="feeds-icons-bottom" />
                    <span className="text-comment">comment</span>
                  </span>
                  <span className="feeds-group-icons">
                    <RiShareForwardLine className="feeds-icons-bottom" />{' '}
                    <span>share</span>{' '}
                  </span>
                  <span className="feeds-group-icons">
                    <FiSend className="feeds-icons-bottom" /> <span>send</span>
                  </span>
                </span>
              </Row>
            </Container>
          ))}
      </>
    );
  }
}

export default Feeds;
