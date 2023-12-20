import logo from './logo.svg';
import './App.css';
import TaskList from "./components/Task/TaskList";
import {useState} from "react";
import Login from "./components/Login/Login";
import UserList from "./components/User/UserList";

function App() {
  // const [name, setName] = useState("Luan")
  return (
      // <TaskList name={name} age={30}/>
      <UserList/>
  );
}

export default App;
