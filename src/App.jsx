import { Chat } from "./components/Chat";
import { Sidebar } from "./components/Sidebar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import './style.scss';

function App() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
      
    </div>
  )
}

export default App;
