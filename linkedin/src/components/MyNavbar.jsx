import { Navbar, Row, Nav, Form, FormControl, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { ImHome3 } from "react-icons/im";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { BiMessageRoundedDots } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiAbstract050 } from "react-icons/gi";

const MyNavbar = () => (
  <div>
    <Navbar className="bg-navbar">
      <Navbar.Brand href="#home">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          class="global-nav__logo"
          className="navbar-img-logo"
        >
          <title>LinkedIn</title>

          <g>
            <path
              d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z"
              fill="blue"
            ></path>
          </g>
        </svg>
      </Navbar.Brand>
      <Form inline>
        <FormControl
          className="navbar-searching-style"
          type="text"
          placeholder="Search"
          className="mr-sm-2"
        />
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <div className="mt-3">
            <Row className="mx-2 ">
              <ImHome3 className="icons-navbar" />
            </Row>
            <Row className="mx-2 navbar-rows-text">
              <p>Main</p>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="mx-2">
              <BsFillPeopleFill className="icons-navbar" />
            </Row>
            <Row className="mx-3 navbar-rows-text">
              <p>Network</p>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="mx-2">
              <MdWork className="icons-navbar" />
            </Row>
            <Row className="mx-2 navbar-rows-text">
              <p>Job offers</p>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="mx-2">
              <BiMessageRoundedDots className="icons-navbar" />
            </Row>
            <Row className="mx-2 navbar-rows-text">
              <p>Messages</p>
            </Row>
          </div>
          <div className="mt-3">
            <Row className="mx-2">
              <MdNotifications className="icons-navbar" />
            </Row>
            <Row className="mx-2 navbar-rows-text">
              <p>Notifications</p>
            </Row>
          </div>
          <div className="mt-2">
            <Dropdown>
              <Row className="mx-2">
                <Dropdown.Toggle className="navbar-toggle-style">
                  <ImProfile className="icons-navbar" />
                </Dropdown.Toggle>
              </Row>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
              <Row className="mx-2 navbar-rows-text">
                <p>
                  Me <IoMdArrowDropdown />{" "}
                </p>
              </Row>
            </Dropdown>
          </div>
          <div className="mt-3 navbar-last-one">
            <Row className="mx-2">
              <GiAbstract050 className="icons-navbar" />
            </Row>
            <Row className="mx-2 navbar-rows-text">
              <p>Jobs</p>
            </Row>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default MyNavbar;
