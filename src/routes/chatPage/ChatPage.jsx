import { useEffect, useRef } from "react";
import "./chatPage.css";

const ChatPage = () => {
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  });
  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message user">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            dolor, laboriosam amet, nisi neque sed perferendis ipsa quae qui
            impedit ratione cupiditate sunt tenetur corrupti eos nobis
            molestiae.
          </div>
          <div className="message">Demo Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Demo Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Demo Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Demo Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Demo Message from AI</div>
          <div className="message user">Message from User</div>
          <div className="message">Demo Message from AI</div>
          <div ref={endRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
