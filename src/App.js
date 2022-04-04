import { Route, Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path={'/'} element = {<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
