import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";

function Contact() {
  return (
    <div className="contact">
      <h2 className="contact-tittle">Contact Me</h2>
      <div className="contact-body">
        <div className="contact-left">
          <h2 className="contact-subtittle">Let's discuss</h2>
          <h2 className="contact-subtittle">your project</h2>
          <div className="contact-label">
            <img src={Phone} alt="" className="icon-label" />
            <p>+62 813 9545 8208</p>
          </div>
          <div className="contact-label">
            <img src={Email} alt="" className="icon-label" />
            <p>yaserant@gmail.com</p>
          </div>
          <div className="contact-label">
            <img src={Address} alt="" className="icon-label" />
            <div>
              <p>Baleendah, Kab. Bandung, West Java</p>
              <p>Indonesia. 40377</p>
            </div>
          </div>
        </div>
        <div className="contact-right">
          <input type='text' id="name" name="name" placeholder="Name" className="input-form"/>
          <input type='text' id="subject" name="subject" placeholder="Subject" className="input-form"/>          
          <input type='text' id="email" name="email" placeholder="Email" className="input-form"/>
          <textarea className="contact-textarea" placeholder="Message"/>
          <button type="submit" className="button-send">Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
