import "./header.css";
import icons from "../../icon";

function Header() {
  return (
    <header className="container">
      <img src={icons.logo} alt="" />
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Blog</a>
        </li>
        <li>
          <a href="">About Us</a>
        </li>
      </ul>
      <div className="header_btn">
        <button className="login">Login</button>
        <button className="sign">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
