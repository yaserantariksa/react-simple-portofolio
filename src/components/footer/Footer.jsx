import "./footer.css";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaTwitterSquare,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h1 className="footer-text">A Yaser Antariksa</h1>
        <div>
          <p className="footer-text">
            Mobile App Developer - Web App Developer
          </p>
          <p className="footer-text">Full Stack Developer</p>
        </div>
        <p className="footer-text">
          Build with <span className="love">&#x2764;</span> by YaserAntariksa;
        </p>
      </div>
      <div className="footer-right">
        <div className="social-media">
          <FaFacebookSquare className="social-icon"/>
          <FaLinkedinIn className="social-icon" />
          <FaTwitterSquare className="social-icon" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
