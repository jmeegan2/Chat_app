
import { useState } from 'react';
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");

  return (
  
    <>
    <div className='App'>
    <h3>Join Chat</h3>
    <input type="text" placeholder="John..." />
    <input type="text" placeholder='Room ID...'/>
    <button>Join A Room</button>
    </div>
    </>
  )
}

export default App;