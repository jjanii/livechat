import styled from "styled-components"
import { Socket } from "socket.io-client"
import ChatInput from "./ChatInput"
import ChatMessages from "./ChatMessages"
import { Message } from "../../types/chat"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    height: calc(100vh - 40px);
  }
`

const Chat = ({
  socket,
  username,
  messages,
}: {
  socket: Socket
  username: string
  messages: Message[]
}) => {
  return (
    <Container>
      <ChatMessages messages={messages} username={username} />
      <ChatInput username={username} socket={socket} />
    </Container>
  )
}

export default Chat
