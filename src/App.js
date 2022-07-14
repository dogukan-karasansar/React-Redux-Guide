import "./App.css";
import {Navbar} from "./components/Navbar";
import { Task } from "./components/Task";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Task />
    </div>
  );
}

export default App;
