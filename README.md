## A hobby project for a websocket based live chat

### Stack
##### Frontend: React
##### Backend: Node.js
### How to run
The app uses on local dev mode `localhost:3000` for frontend, and `localhost:5001` for the server. Feel free to change the server port in the `server.js` file and also in the `env.development` file
#### Frontend
```bash
foo@bar:~$ cd frontend && npm install
foo@bar:~$ npm start
```
#### Backend
```bash
foo@bar:~$ cd backend && npm install
foo@bar:~$ node server.js
```

### Future todo improvements
- Add notifications when people enter and leave the chat.
- Could even show the list of users online.
- Improve auth so user registers an account(/username) which then belongs to them.
- Add database so messages wont be lost in eternity for the user, but instead when user reopens the chat they will be able to read all messages.
- Based on the feature above, do some sort of handling to load X amount of messages per click from history instead of just pushing all of them at once
- If I would want to have this in real use, redis would be pretty much required with the pub / sub feature.