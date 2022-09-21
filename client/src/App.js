
import io from 'socket.io-client'

const socket = io.connect("http://localhost:3001");

function App() {
  return <h1>Hello</h1>
}

export default App;