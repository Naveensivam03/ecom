
import './contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Collect form data using FormData
    const form = e.target;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Simulate form submission
    console.log('Form submitted:', data);
    alert('Thank you for your message! We will get back to you soon.');

    // Reset the form
    form.reset();
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <div className='conbox'>
        <h1 className="contact-heading">
          Let’s Connect.<br />Share Your opinions.
        </h1>
        </div>
        <p className="contact-subtext">We’re excited to get reviews.</p>
        <div className="contact-email">
          <span className="email-icon">✉️</span>
          <span>Reach us at <a href="mailto:support@yourshop.com">support@yourshop.com</a></span>
        </div>
      </div>
      <div className="contact-right">
        <div className="gradient-border"></div>
        <h2 className="form-title">Drop Us a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              placeholder=" "
              required
            />
            <label htmlFor="name" className="form-label">Full Name<span className="required">*</span></label>
          </div>
          <div className="form-group">
            <span className="input-icon">✉️</span>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              placeholder=" "
              required
            />
            <label htmlFor="email" className="form-label">Email Address<span className="required">*</span></label>
          </div>
          <div className="form-group">
            <span className="input-icon">📋</span>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input"
              placeholder=" "
              required
            />
            <label htmlFor="subject" className="form-label">Subject<span className="required">*</span></label>
          </div>
          <div className="form-group">
            <span className="input-icon">💬</span>
            <textarea
              id="message"
              name="message"
              className="form-input form-textarea"
              placeholder=" "
              rows="5"
              required
            ></textarea>
            <label htmlFor="message" className="form-label">Your Message<span className="required">*</span></label>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;