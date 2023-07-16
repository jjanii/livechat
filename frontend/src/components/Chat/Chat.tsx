import styled from "styled-components"
import { Socket } from "socket.io-client"
import ChatInput from "./ChatInput"
import ChatList from "./ChatList"
import { Message } from "../../types/chat"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
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
      <ChatList messages={messages} username={username} />
      <ChatInput username={username} socket={socket} />
    </Container>
  )
}

export default Chat
