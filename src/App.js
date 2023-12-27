import './App.css';
import TaskList from "./components/Task/TaskList";
import UserList from "./components/User/UserList";
import SignUp from "./components/SignUp/SignUp";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Paperbase from "./layout/Paperbase/Paperbase";
import Login from "./components/Login/Login";
import ProductList from "./components/Product/ProductList/ProductList";

function App() {
  return (
      <Routes>
          <Route path={"home"} element={<Home/>}></Route>
          <Route path={"sign-up"} element={<SignUp/>}></Route>
          <Route path={"login"} element={<Login/>}></Route>


          <Route path={"dashboard"} element={<Paperbase/>}>
              <Route path={"users"} element={<UserList/>}></Route>
              <Route path={"tasks"} element={<TaskList/>}></Route>
              <Route path={"products"} element={<ProductList/>}></Route>
          </Route>

      </Routes>
  );
}

export default App;
