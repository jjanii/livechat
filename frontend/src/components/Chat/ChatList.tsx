import styled from "styled-components"

const Messages = styled.ul`
  height: max-content;
  list-style-type: none;
  padding: 0;
  margin-bottom: 20px;
  overflow-y: auto;
`

const Item = styled.li<{ isAuthor: boolean }>`
  margin-bottom: 10px;
  text-align: ${({ isAuthor }) => (isAuthor ? "right" : "left")};
`

const Content = styled.div<{ isAuthor: boolean }>`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 8px;
  background-color: ${({ isAuthor }) => (isAuthor ? "#25D366" : "#f2f2f2")};
  color: ${({ isAuthor }) => (isAuthor ? "#ffffff" : "#000000")};
  max-width: 60%;
  word-wrap: break-word;
`

const Username = styled.span`
  font-weight: bold;
  margin-right: 5px;
`

type Message = {
  content: string
  username: string
}

type Props = {
  messages: Message[]
  username: string
}

const ChatList = ({ messages, username }: Props) => {
  return (
    <Messages>
      {messages.map((message, index) => {
        const isAuthor = message.username === username
        return (
          <Item key={index} isAuthor={isAuthor}>
            <Content isAuthor={isAuthor}>
              {!isAuthor && <Username>{message.username}: </Username>}
              {message.content}
            </Content>
          </Item>
        )
      })}
    </Messages>
  )
}

export default ChatList
