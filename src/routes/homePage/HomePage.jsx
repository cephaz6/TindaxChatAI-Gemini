import { Link } from "react-router-dom";
import "./homePage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1 className="heading-font">TINDAX.AI</h1>
        <h2>Superchare your Creativity and Productivity</h2>
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
          tenetur itaque est blanditiis voluptates.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Homepage;
