import { useState } from "react"
import styled from "styled-components"
import { Message } from "../../types/chat"
import { Socket } from "socket.io-client"

const Container = styled.div`
  margin-top: auto;
  display: flex;
`

const Input = styled.input`
  height: 30px;
  flex: 4;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #29a657;
  font-size: 16px;
  outline: none;
`

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  flex: 1;
  background-color: #25d366;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;

  &:hover {
    background-color: #26de6b;
  }

  ${({ disabled }) =>
    disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}
`

type Props = {
  username: string
  socket: Socket | null
}

const ChatInput = ({ username, socket }: Props) => {
  const [inputValue, setInputValue] = useState("")

  const handleSendMessage = () => {
    if (inputValue !== "") {
      const message: Message = { content: inputValue, username }
      socket?.emit("message", message)
      setInputValue("")
    }
  }

  return (
    <Container>
      <Input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
        placeholder="Type a message.."
      />
      <Button onClick={handleSendMessage} disabled={!inputValue.length}>
        Send
      </Button>
    </Container>
  )
}

export default ChatInput
