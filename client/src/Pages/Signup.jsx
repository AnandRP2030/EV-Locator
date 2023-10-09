import { Container, Image, Form, Button, Stack } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import "./styles/login.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <Container fluid className="login-page">
        <Container fluid className="trapezoid-box"></Container>

        <Container fluid className="login-container">
          <Container className="img-section">
            <Image
              src="https://www.cyient.com/hubfs/MicrosoftTeams-image_%2811%29.png"
              alt="img"
            />
          </Container>
          <Container className="login-form-container">
            <h1 className="login-welcome">Signup</h1>
            <Form>
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Full Name"
              />
              <Form.Control
                className="mb-3"
                type="text"
                placeholder="Phone Number"
              />
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
            <p className="bottom-caption">
              Already have an account? <span onClick={() => navigate('/login')}> Login </span>
            </p>

            <Button className="login-btn">Login</Button>
            <Button className="signup-btn">Signup</Button>

            <Stack className="footer" direction="horizontal" gap={3}>
              <div>Copyright Policy</div>
              <div>Privacy Policy</div>
              <div>Send feedback</div>
            </Stack>
            <Stack className="footer-2" direction="horizontal" gap={3}>
              <div>User</div>
              <div>Privacy Policy</div>
              <div>Send feedback</div>
              <div className="ms-auto credit">EV Locator © 2023</div>
            </Stack>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default Signup;
