import icons from "../../icon";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <nav className="container">
        <div className="zoom">
          <img src={icons.logonight} alt="" />
          <h3>Virtual Class for Zoom</h3>
        </div>
        <div className="news">
          <h2>Subscribe to get our Newsletter</h2>
          <div className="sub">
            <input
              placeholder="Your Email"
              className="email"
              type="email"
              name=""
              id=""
            />
            <button className="sub_btn">Subscribe</button>
          </div>
        </div>
        <div className="links">
          <ul>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Privacy Policy</a>
            </li>
            <li>
              <a href="">Terms & Conditions</a>
            </li>
          </ul>
          <a href="">© 2021 Class Technologies Inc. </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
