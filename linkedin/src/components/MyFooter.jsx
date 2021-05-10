import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Row, Col, Nav, Form, Container } from 'react-bootstrap';
import { AiFillSetting } from 'react-icons/ai';
import { AiFillQuestionCircle } from 'react-icons/ai';

const MyFooter = () => (
  <Container>
    <Row className="footer-main-row">
      <Col>
        <div className="icon-footer-logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 84 21"
            data-supported-dps="84x21"
            fill="blue"
            class="mercado-match"
            width="84"
            height="21"
            focusable="false"
          >
            <g>
              <g class="background-mercado">
                <path d="M12.5 2.75a1.75 1.75 0 101.8 1.75 1.75 1.75 0 00-1.8-1.75zM11 8h3v10h-3zM22.34 7.76A4.06 4.06 0 0019 9.39V8h-3v10h3v-5a2.31 2.31 0 012.16-2.48c1.1 0 1.84.82 1.84 2.44V18h3v-6.25c0-3.06-1.89-3.99-3.66-3.99zM82.5 0h-18A1.5 1.5 0 0063 1.5v18a1.5 1.5 0 001.5 1.5h18a1.5 1.5 0 001.5-1.5v-18A1.5 1.5 0 0082.5 0zM69 18h-3V8h3zM67.5 6.25a1.75 1.75 0 111.8-1.75 1.75 1.75 0 01-1.8 1.75zM81 18h-3v-5.09c0-1.62-.74-2.44-1.84-2.44A2.31 2.31 0 0074 13v5h-3V8h3v1.39a4.06 4.06 0 013.3-1.63c1.77 0 3.66.93 3.66 4zM3 3H0v15h9v-3H3V3zM57 9a4.23 4.23 0 00-3.17-1.3A4.9 4.9 0 0049 12.94a5 5 0 004.87 5.36 3.78 3.78 0 003.31-1.61V18H60V3h-3zm-2.54 6.8A2.57 2.57 0 0151.9 13a2.55 2.55 0 012.56-2.8A2.63 2.63 0 0157.1 13a2.6 2.6 0 01-2.64 2.8zM38.04 8H34.4l-3.34 4.04H31V3h-3v15h3v-4.81h.06L34.48 18h3.75l-4.06-5.5L38.04 8z"></path>
                <path d="M43.13 7.7A5 5 0 0038 12.87a5.11 5.11 0 005.24 5.43 5.5 5.5 0 004.39-1.94l-1.93-1.3a3.28 3.28 0 01-2.4 1 2.24 2.24 0 01-2.38-2V14h7v-.77C48 9.52 45.85 7.7 43.13 7.7zm-2.2 4.3a2.16 2.16 0 012.21-2.1 2 2 0 012 2.1z"></path>
              </g>
            </g>
          </svg>
        </div>

        <Nav.Link className="footer-links ">About</Nav.Link>
        <Nav.Link className="footer-links ">Comunity Guidelines</Nav.Link>
        <Nav.Link className="footer-links ">Privacy $ Terms</Nav.Link>
        <Nav.Link className="footer-links ">Sales Solutions</Nav.Link>
        <Nav.Link className="footer-links ">Safety Center</Nav.Link>

        <div className="footer-copyright">LinkedIn Corporation © 2021</div>
      </Col>

      <Col className="mt-5">
        <Nav.Link className="footer-links ">Accesibility</Nav.Link>
        <Nav.Link className="footer-links ">Careers</Nav.Link>
        <Nav.Link className="footer-links ">Ad choices</Nav.Link>
        <Nav.Link className="footer-links ">Mobile</Nav.Link>
      </Col>
      <Col className="mt-5">
        <Nav.Link className="footer-links ">Talent Solutions</Nav.Link>
        <Nav.Link className="footer-links ">Marketing Solutions</Nav.Link>
        <Nav.Link className="footer-links ">Advertising</Nav.Link>
        <Nav.Link className="footer-links ">Small Business</Nav.Link>
      </Col>
      <Col className="mt-5">
        <Nav.Link className="footer-links-icons ">
          <AiFillQuestionCircle className="icons-footer-style" />
          Questions?
        </Nav.Link>
        <p className="footer-undertext">Visit our help center</p>

        <Nav.Link className="footer-links-icons ">
          <AiFillSetting className="icons-footer-style" /> Manage your account
          and privacy
        </Nav.Link>
        <p className="footer-undertext">Go to your settings</p>
        <Nav.Link className="footer-links ">Corporate information</Nav.Link>
      </Col>
      <Col className="mt-5">
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label className="footer-links-language ">
              Select language
            </Form.Label>

            <Form.Control size="sm" as="select">
              <option>English</option>
              <option>Deutsch</option>
              <option>French</option>
              <option>Italian</option>
              <option>Spanish</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
);
export default MyFooter;
