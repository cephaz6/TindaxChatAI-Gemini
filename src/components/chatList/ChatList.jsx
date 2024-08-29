import { Link } from "react-router-dom";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create A New Chat</Link>
      <Link to="/">Explore Tindax AI</Link>
      <Link to="/">Contact Us</Link>

      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">Demo Chat Title</Link>
        <Link to="/">Demo Chat Title</Link>
        <Link to="/">Demo Chat Title</Link>
        <Link to="/">Demo Chat Title</Link>
        <Link to="/">Demo Chat Title</Link>
      </div>
      <hr />

      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Tindax AIpro</span>
          <span>Get Unlimited Access to All Features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
