// // import { useState } from "react";
// // import { useParams } from "react-router-dom";
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   Flex,
//   Text,
//   TextArea,
// } from "@radix-ui/themes";

// import { useWeb3ModalAccount } from "@web3modal/ethers/react";

// // import useGetDomainDetails from "../hooks/useGetDomainDetails";
// // import useGetAddressFromName from "../hooks/useGetAddressFromName";
// // import useGetMessages from "../hooks/useGetMessages";
// // import useSendMessage from "../hooks/useSendMessage";

// const Message = () => {
//   const { address } = useWeb3ModalAccount();
//   //   const [messageText, setMessageText] = useState("");
//   //   const { domainName } = useParams();
//   //   const receiver = useGetAddressFromName(domainName);
//   //   const { avatar } = useGetDomainDetails(receiver);
//   //   const { domainName: sender } = useGetDomainDetails(address);

//   //   const { messages } = useGetMessages();

//   //   const handleSendMessage = useSendMessage();

//   return (
//     <>
//       <Text as="div" weight="bold" className="text-xl">
//         Chat with {/*{domainName} */}
//       </Text>
//       {/* {messages.map((message, index) => { */}
//       return (
//       <Box width="800px" key={index}>
//         <Card size="2">
//           <Flex gap="4" align="center">
//             <Avatar
//               src={import.meta.env.VITE_ipfs_base_url + avatar}
//               size="4"
//               radius="full"
//               fallback="0x"
//               color="indigo"
//             />
//             <Box>
//               <Text as="div" weight="bold">
//                 {message[0] === address ? sender : domainName}
//               </Text>
//               <Text as="div" color="gray">
//                 {message[2]}
//               </Text>
//             </Box>
//           </Flex>
//         </Card>
//       </Box>
//       ); })
//       {/* } */}
//       <Flex justify={"between"} align={"center"}>
//         <Box minWidth={"85%"} className="m-2">
//           <TextArea
//             placeholder="Send message..."
//             size={"2"}
//             value={messageText}
//             onChange={(e) => setMessageText(e.target.value)}
//           />
//         </Box>
//         <Button
//           size={"3"}
//           className="self-center"
//           onClick={async () => {
//             await handleSendMessage(domainName ?? "", messageText);
//             setMessageText("");
//           }}
//         >
//           Send
//         </Button>
//       </Flex>
//     </>
//   );
// };

// export default Message;

import React, { useState } from "react";

import { Button, TextArea } from "@radix-ui/themes";

const Message = ({ from, children }) => (
  <div className={`message ${from === "User" ? "user" : "bot"}`}>
    <span className="message-sender">{from}:</span>
    <p>{children}</p>
  </div>
);

const ChatBox = () => {
  const [messages, setMessages] = useState([
    { from: "User", content: "Hello!" },
    { from: "Bot", content: "Hi there! How can I help you today?" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { from: "User", content: newMessage }]);
    setNewMessage("");
  };

  return (
    <div className="chat-container">
      <header className="chat-header">
        <h2>Chat Box</h2>
        {/* Add DropdownMenu component here (optional) */}
      </header>

      <main className="chat-history">
        {messages.map((message) => (
          <Message key={message.content} from={message.from}>
            {message.content}
          </Message>
        ))}
      </main>

      <footer className="chat-input">
        <TextArea
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <Button type="primary" onClick={sendMessage}>
          Send
        </Button>
      </footer>
    </div>
  );
};

export default ChatBox;
