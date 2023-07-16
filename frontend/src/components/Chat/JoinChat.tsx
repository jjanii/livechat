import React, { useEffect, useState } from "react"
import { Socket } from "socket.io-client"
import styled from "styled-components"
import ErrorMessage from "../generic/ErrorMessage"
import Button from "../generic/Button"

// Container to place the form on center of page
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border-radius: 4px;
  border: 1px solid #29a657;
  outline: none;
`

type Props = {
  socket: Socket | null
  onLogin: (username: string) => void
}

const JoinChat = (props: Props) => {
  const [username, setUsername] = useState("")
  const [errorMsg, setError] = useState<string | undefined>(undefined)

  const { socket, onLogin } = props

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.length > 2) {
      socket?.emit("setUsername", username)
    } else {
      setError("Username must contain atleast 3 characters")
    }
  }

  useEffect(() => {
    socket?.on("usernameSet", () => onLogin(username))
    socket?.on("usernameTaken", () =>
      setError("Username already in use in the chat.")
    )
  }, [socket, username])

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <Button type="submit">Join Chat</Button>
      </form>
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}
    </Container>
  )
}

export default JoinChat
