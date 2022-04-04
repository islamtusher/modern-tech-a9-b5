import { Route, Router, Routes } from "react-router-dom";
import NotFound from "./components/404page/NotFound";
import Blogs from "./components/blogs/Blogs";
import DashBoard from "./components/dashboard/DashBoard";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Reviews from "./components/reviews/Reviews";


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path={'/dashboard'} element={<DashBoard></DashBoard>}></Route>
        <Route path={'/blogs'} element={<Blogs></Blogs>}></Route>
        <Route path={'*'} element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
