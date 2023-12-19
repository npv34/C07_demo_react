import logo from './logo.svg';
import './App.css';
import TaskList from "./components/Task/TaskList";
import {useState} from "react";

function App() {
  const [name, setName] = useState("Luan")
  return (
      <TaskList name={name} age={30}/>
  );
}

export default App;
