import { Navbar, Row, Nav, Form, FormControl, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { ImHome3 } from 'react-icons/im';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdWork } from 'react-icons/md';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import { IoMdArrowDropdown } from 'react-icons/io';
import { GiAbstract050 } from 'react-icons/gi';
import { AiOutlineSearch } from 'react-icons/ai';
import { withRouter, Link } from 'react-router-dom';

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
      <div className="magnify-glass-navbar">
        {' '}
        <AiOutlineSearch />{' '}
      </div>
      <Form inline>
        <div>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 navbar-searching-style"
          />
        </div>
      </Form>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-icons-alignment">
          <span className="navbar-icons-container">
            <ImHome3 className="icons-navbar" />
            <br></br>
            <Link to="/home" className="navbar-rows-text">
              Home
            </Link>
          </span>
          <span className="navbar-icons-container">
            <BsFillPeopleFill className="icons-navbar-network" />
            <br></br>
            <Link to="" className="navbar-rows-text">
              Network
            </Link>
          </span>
          <span className="navbar-icons-container">
            <MdWork className="icons-navbar" />
            <br></br>
            <Link to="" className="navbar-rows-text">
              Jobs
            </Link>
          </span>
          <span className="navbar-icons-container">
            <BiMessageRoundedDots className="icons-navbar-messages" />
            <br></br>
            <Link to="" className="navbar-rows-text">
              Messages
            </Link>
          </span>
          <span className="navbar-icons-container">
            <MdNotifications className="icons-navbar-notifications" />
            <br></br>
            <Link to="" className="navbar-rows-text">
              Notifications
            </Link>
          </span>
          <span className="navbar-icons-container">
            <ImProfile className="icons-navbar-me" />
            <br></br>
            <Link to="/userprofile/me" className="navbar-rows-text-me">
              Me <IoMdArrowDropdown className="icons-navbar-dropdown" />
            </Link>
          </span>
          <span className="navbar-icons-container-jobs">
            <GiAbstract050 className="icons-navbar-work" />
            <br></br>
            <Link to="" className="navbar-rows-text">
              Work <IoMdArrowDropdown className="icons-navbar-dropdown" />
            </Link>
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);
export default withRouter(MyNavbar);
