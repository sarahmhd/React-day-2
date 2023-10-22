import "./about.css";

const About = () => {
  return (
    <div className="about py-5">
      <div className="container">
        <h2 className="section-header">About Me</h2>
        <div className="section-content d-flex flex-column">
          <div className="info d-flex flex-column gap-2">
            <h3>
              I am <span className="name">Sarah_Mohamed</span>
            </h3>
            <h6>Web Developer</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation laboris nisi ut aliquip
            ex ea commodo consequat.
          </p>
          <a
            className="btn text-uppercase after-btn"
            href="../../assets/Sarah_Mohamed_CV.pdf"
            download="Sarah_Mohamed_CV"
            rel="no-refresh"
          >
            download my cv
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
