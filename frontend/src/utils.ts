// Define a type for a chat room
type ChatRoom = {
    id: string;
    name: string;
  };
  
  // Chat room names
  const chatRoomNames: string[] = [
    "Cars",
    "Movies",
    "Music",
    "Sports",
    "Travel",
    "Foodies",
    "Gaming",
    "Books",
    "Tech Talk",
    "Fashion"
  ];
  
  // Default chat rooms with random generated numbers as IDs
  const defaultChatRooms: ChatRoom[] = [
    { id: "02235400", name: chatRoomNames[0] },
    { id: "04004336", name: chatRoomNames[1] },
    { id: "25386487", name: chatRoomNames[2] },
    { id: "31720697", name: chatRoomNames[3] },
    { id: "34259350", name: chatRoomNames[4] },
    { id: "37536748", name: chatRoomNames[5] },
    { id: "40780335", name: chatRoomNames[6] },
    { id: "43861545", name: chatRoomNames[7] },
    { id: "52452929", name: chatRoomNames[8] },
    { id: "78944433", name: chatRoomNames[9] }
  ];