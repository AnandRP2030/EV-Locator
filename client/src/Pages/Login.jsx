import { Container, Image, Form, Stack, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <Container fluid className="login-page">
        <Container fluid className="trapezoid-box trapezoid-box-login"></Container>

        <Container fluid className="login-container ">
          <Container className="img-section login-img-section">
            <Image
              src="https://www.omanobserver.om/omanobserver/uploads/images/2022/03/21/1948788.jpg"
              alt="img"
            />
          </Container>
          <Container className="login-form-container">
            <h1 className="login-welcome">Login</h1>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  className="remember-check-box"
                  type="checkbox"
                  label="Remember me ?"
                />
              </Form.Group>
            </Form>
            <p className="bottom-caption">
              Need an account?{" "}
              <span onClick={() => navigate("/signup")}> Signup </span>
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
export default Login;
