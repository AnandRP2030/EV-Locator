import { Form, InputGroup, Stack } from "react-bootstrap";
import { AiOutlineMail } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillGoogleCircle,
} from "react-icons/ai";

import "./styles/footer.css";
const Footer = () => {
  const iconStyle = {
    fontSize: "25px",
  };
  return (
    <div className="my-footer">
      <div>
        <Stack >
          <h4 className="footer-logo">EV Locator </h4>
          <InputGroup className="footer-mail">
            <InputGroup.Text>
              <AiOutlineMail />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Enter Your Email" />
          </InputGroup>
          <div className="socialmedia-icons">
            <FaSquareInstagram style={iconStyle} />
            <AiFillFacebook style={iconStyle} />
            <AiFillTwitterSquare style={iconStyle} />
            <AiFillGoogleCircle style={iconStyle} />
          </div>
        </Stack>
        <Stack className="my-stack">
          <p>Links</p>
          <p>Home</p>
          <p>Support</p>
          <p>About us</p>
        </Stack>
        <Stack className="my-stack">
          <p>Contact us</p>
          <p>(+91) 123-456-7890</p>
          <p>evlocator.@gmail.com</p>
        </Stack>
        <Stack className="download-app-stack my-stack">
          <p>Download App</p>
          <img
            src="https://pbs.twimg.com/media/F8K8X3_XMAAKWYp?format=jpg&name=small"
            alt="play-store"
          />
          <img
            src="https://pbs.twimg.com/media/F8K9Y0mXUAA7itL?format=png&name=small"
            alt="play-store"
          />
        </Stack>
      </div>
      <div className="footer-credit">
        <p>© 2023 EV Locator</p>
        <div>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
