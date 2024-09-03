import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="./orbital.png" alt="" className="orbital" />
      <div className="left">
        <h1 className="heading-font">Lagos-AI</h1>
        <h2>Supercharge your creativity and productivity</h2>
        <h3>
          Chat to start writing, planning, learning and more with Tindax AI
        </h3>
        <Link to="/dashboard">Chat with Tindax</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "/bot.png"
              }
              alt=""
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Cephas: What do you think about ChatGPT?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Tindax: As of this moment, I think Tindax.AI is the best out there",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Oselumese: Please, help rewrite my email and make it more concise",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Tindax: Sure, here is a more clear and concise version of your email draft",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <div className="links">
          <img src="/logo.png" alt="" />
          <Link to="#"> Terms of Service</Link>
          <span>|</span>
          <Link to="#"> Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
