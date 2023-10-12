import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import { FaChargingStation } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const NavbarComponent = () => {
  const [userLogin, setUserLogin] = useState(false);
  const navigate = useNavigate();
  const redirectSignup = () => {
    navigate("/signup");
  };
  const redirectLogin = () => {
    navigate("/login");
  };

  const redirectHome = () => {
    navigate("/");
  };

  const userLogout = () => {
    setUserLogin(false);
    console.log("logout");
  };

  const redirectStation = () => {
    navigate("/stations");
  };

  return (
    <>
      <Navbar id="custom-navbar-styles" fixed="top" data-bs-theme="dark">
        <Nav className="nav-left me-auto">
          <Navbar.Brand className="navbar-brand-logo" onClick={redirectHome}>
            <Image
              className="logo"
              src="https://pbs.twimg.com/media/F7_vgQqWcAAEr-p?format=jpg&name=small"
              alt="logo"
            />
          </Navbar.Brand>
        </Nav>
        <Nav className="nav-right">
          <Nav.Link onClick={redirectStation}>
            Find stations <FaChargingStation className="charging-icon" />
          </Nav.Link>

          {userLogin ? (
            <Nav.Link>
              <Button onClick={userLogout} className="login-btn-2">
                {" "}
                Log out
              </Button>
            </Nav.Link>
          ) : (
            <Stack direction="horizontal" className="nav-btns">
              <Nav.Link>
                <Button
                  onClick={redirectSignup}
                  className="signin-btn"
                  variant="outline-dark"
                >
                  {" "}
                  Sign up
                </Button>
              </Nav.Link>
              <Nav.Link>
                <Button onClick={redirectLogin} className="login-btn-2">
                  {" "}
                  Log in
                </Button>
              </Nav.Link>
            </Stack>
          )}
        </Nav>
      </Navbar>
    </>
  );
};
export default NavbarComponent;
