import { useEffect, useState } from "react"
import { Socket, io } from "socket.io-client"
import Chat from "./components/Chat/Chat"
import JoinChat from "./components/Chat/JoinChat"
import { Message } from "./types/chat"

const App = () => {
  const [socket, setSocket] = useState<Socket | null>(null)
  const [username, setUsername] = useState<string>("")
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const client = io("http://localhost:5001")
    
    setSocket(client)

    client.on("connect", () => {
      console.log("Socket.IO connection established")
    })

    client.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message])
    })

    return () => {
      client.disconnect()
    }
  }, [])

  const handleLogin = (user: string) => {
    setUsername(user.trim())
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return <JoinChat socket={socket} onLogin={handleLogin} />
  }

  return socket ? (
    <Chat socket={socket} messages={messages} username={username} />
  ) : null
}

export default App
