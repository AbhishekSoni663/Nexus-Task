import "../Footer/Footer.css"
import Notification from "../Notifaction/Notification";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <section className="footer-main">
          <div className="footer-form">
            <h5>Subscribe to Aesop communications</h5>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <input
              className="foot-inp1"
              type="Email"
              placeholder="Email address"
            />
            <p>
              <input className="foot-inp-p" type="checkbox" />
              Subscribe to receive communications from Aesop about our products
              and services. By subscribing, you confirm you have read and accept
              our privacy policy.
            </p>
          </div>
          <div className="footer-ul">
            <h3>Orders and support</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <a href="#">
              Contact us <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              FAQs <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Shipping <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Returns <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">Order History</a>
            <a href="#">Terms and conditions</a>
          </div>
          <div className="footer-ul">
            <h3>Services</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <a href="#">Live assistance</a>
            <a href="#">Corporate gifts</a>
            <a href="#">Facial Appointments</a>
            <a href="#">Click and Collect</a>
            <a href="#">Video consultation</a>
          </div>
          <div className="footer-ul">
            <h3>Location Preferences</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <a href="#">Shipping</a>
            <a href="#">
              <u>Hong Kong Sar,China</u>
            </a>
            <a href="#">Language:</a>
            <a href="#">
              <u>English</u>
            </a>
            <a href="#">繁體中文</a>
          </div>
          <div className="footer-ul2">
            <h3>Sustainability</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <p>
              All Aesop products are vegan, and we do not test our formulations
              or ingredients on animals. We are Leaping Bunny approved and a
              Certified B Corporation. Learn more
            </p>
          </div>
          <div className="footer-ul2-a">
            <h3>About</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <a href="#">Our story</a>
            <a href="#">Foundaton</a>
            <a href="#">Careers</a>
            <a href="#">Privacy policy</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie Policy</a>
          </div>
          <div className="footer-ul2-a1">
            <h3>Social media</h3>
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <a href="#">
              Instagram <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Twitter <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Linkedin <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Privacy policy <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              We Chat <i className="bi bi-arrow-up-right"></i>
            </a>
            <a href="#">
              Video <i className="bi bi-arrow-up-right"></i>
            </a>
          </div>

          <div className="footer-copy">
            <hr style={{ color: "#C7F0F2", opacity: "1" }} />
            <span className="foot-p-icon">
              <p>© Aesop</p>
              <span className="foot-icon">
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </span>
            </span>
          </div>
        </section>
        <Notification/>
      </section>

    </>
  );
};

export default Footer;
