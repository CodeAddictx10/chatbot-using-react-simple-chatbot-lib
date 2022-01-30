import ChatBot from "react-simple-chatbot";
import "./App.css";
import steps from "./data.js";

function App() {
    return (
        <div className="chat_container">
            <ChatBot steps={steps} className={"bot_style"} />;
        </div>
    );
}

export default App;
