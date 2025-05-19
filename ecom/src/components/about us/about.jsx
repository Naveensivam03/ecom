import "./about.css";

const About = () => {
  const values = [
    {
      title: "Personalized Style",
      description: "Create t-shirts that reflect your unique personality with our custom designs.",
    },
    {
      title: "Premium Quality",
      description: "Crafted with the finest materials to ensure comfort and durability.",
    },
    {
      title: "Community Driven",
      description: "Join a vibrant community of style enthusiasts through our creative designs.",
    },
    {
      title: "Effortless Experience",
      description: "From design to delivery, we make your shopping journey seamless.",
    },
  ];

  return (
    <div className="about-container" id="about">
      <div className="container1">
        <h1 className="about-heading">About KMIZRD</h1>
        <section className="info">
          <div className="info-grid">
            <div className="info-card">
              <h2>Who We Are</h2>
              <p>
                Welcome to <span className="highlight">KMIZRD</span>, your ultimate destination to express your unique style through personalized t-shirts. At KMIZRD, we take pride in being more than a t-shirt distribution company; we are creators of fashion experiences that reflect your individuality.
              </p>
            </div>
            <div className="info-card">
              <h2>Our Mission</h2>
              <p>
                At KMIZRD, we’re more than a t-shirt brand—we’re creators of fashion experiences. Our mission is to empower you to express your unique identity through high-quality, custom apparel that blends creativity, comfort, and confidence.
              </p>
            </div>
          </div>
        </section>
        <section className="values">
          <h2>Why KMIZRD?</h2>
          <div className="values-grid">
            {values.map((value, idx) => (
              <div className="value-card" key={idx}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="cta">
          <a href="/shop" className="cta-button">
            Discover Your Style →
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;