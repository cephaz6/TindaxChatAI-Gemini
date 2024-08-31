import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {
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

          <NewPrompt />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
