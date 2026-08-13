import { useParams } from "react-router-dom";
import { useState, useEffect} from "react";
import { createSocketConnection } from "../utils/socket";
import { useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { touserId } = useParams();
  
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const fetchChatMessages = async() => {
    const chat = await axios.get(BASE_URL + "/chat/" + touserId, {
      withCredentials: true,
    });

    console.log(chat.data.messages);

    const chatMessages = chat?.data?.messages.map((msg) => {
      const{senderId,text} = msg;

      return {
        firstName : senderId?.firstName,
        lastName :  senderId?.lastName,
        text
      }
    });
    setMessages(chatMessages);
  }  

  useEffect(() =>{
     fetchChatMessages()
  },[])

  useEffect(() =>{
    if(!userId){
      return;
    }
      const socket = createSocketConnection();
      // emit an event to the server to join the chat room with the userId and touserId
      socket.emit("joinchat",{firastName:user.firstName,userId,touserId});

      socket.on("messageRecieved", ({firstName,lastName,text}) => {
        console.log(firstName + " " + lastName + " " + text);
        setMessages((messages) => [...messages, {firstName,lastName,text}]);
      });
      
      // when the page unmounts, i.e not renders we want to disconnect the socket connection
      return () => {
        socket.disconnect();
      }
  },[userId,touserId]);

  const sendMessages = () => {
    const socket = createSocketConnection();
    socket.emit("sendMessage", { firstName: user.firstName, lastName: user.lastName, userId, touserId, text: newMessage });
    setNewMessage("");
  }

  return (
    <div className="w-3/4 mx-auto border border-gray-600 m-5 h-[75vh] flex flex-col">
      <h1 className="border-b border-gray-600 p-5 ">Chat Here</h1>
      <div className="flex-1 overflow-scroll p-5">
        {messages.map((msg,index) => {
          return (   
            <div
              key={index}
              className={
                "chat " +
                (user.firstName === msg.firstName ? "chat-end" : "chat-start")
              }
            >
              <div className="chat-header">
                {`${msg.firstName}  ${msg.lastName}`}
                <time className="text-xs opacity-50">2 hours ago</time>
              </div>
              <div className="chat-bubble">{msg.text}</div>
              <div className="chat-footer opacity-50">Seen</div>
            </div>
          );
        }) }
      </div>
      <div className="p-5 border-t border-gray-600 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message here..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="flex-1 border border-gray-500 text-gray-800 rounded p-2"
        ></input>
        <button onClick={sendMessages} className="btn btn-primary">Send</button>
      </div>
    </div>
  );
};

export default Chat;
