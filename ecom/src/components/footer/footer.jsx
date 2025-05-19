import './footer.css';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-wave"></div>
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h3 className="footer-title">KMIZRD</h3>
          <p className="footer-text">
            Welcome to KMIZRD, your ultimate destination to express your unique style through personalized t-shirts. At KMIZRD, we take pride in being more than a t-shirt distribution company; we are creators of fashion experiences that reflect your individuality.
          </p>
        </div>
        <div className="footer-section footer-contact">
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-text">
            <span className="footer-icon">📞</span>
            <a href="tel:+18495336540">+1 (849) 533-6540</a>
          </p>
          <p className="footer-text">
            <span className="footer-icon">✉️</span>
            <a href="mailto:koleccionkmiz@gmail.com">koleccionkmiz@gmail.com</a>
          </p>
          <p className="footer-text">
            <span className="footer-icon">✉️</span>
            <a href="mailto:otonielcruz225@gmail.com">otonielcruz225@gmail.com</a>
          </p>
        </div>
        <div className="footer-section footer-social">
          <h3 className="footer-title">Follow Us</h3>
          <div className="social-links">
            <a href="https://www.instagram.com/kmizrd/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">📸</span> kmizrd
            </a>
            <a href="https://www.instagram.com/koleccionkmiz/" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-icon">📸</span> koleccionkmiz
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} KMIZRD. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;