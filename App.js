import { useState } from "react";
export default function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

function MyComponent() {
  const chatstyle2 = "text-end ps-1 border border-secondary";
  const chatstyle1 = "border border-secondary";
  const [validationError, setValidationError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const ProcessMessage = (e) => {
    const newMessage = e.target.value;
    setMessage(newMessage);
  };

  const addMsg = () => {
    if (message == "") {
      setValidationError(true);
      return;
    }
    console.log(message);
    const newMessageList = [message, ...messageList];
    setMessageList(newMessageList);
    setMessage("");
    setValidationError(false);
  };

  return (
    <div>
      <div className="bg-dark text-light p-1 mb-4">
        <h3>Chat App...Tejashree_108</h3>
      </div>
      <input
        type="text"
        placeholder="Lets chat here...."
        value={message}
        onChange={ProcessMessage}
        className={
          message == "" && validationError ? "border border-danger" : ""
        }
      />
      <input type="button" value="SEND" onClick={addMsg} />
      {messageList.map((item, index) => {
        if (index % 2 == 0) {
          return (
            <div key={index} className={chatstyle1}>
              {item}{" "}
            </div>
          );
        } else {
          return (
            <div key={index} className={chatstyle2}>
              {item}{" "}
            </div>
          );
        }
      })}
      ;
    </div>
  );
}
