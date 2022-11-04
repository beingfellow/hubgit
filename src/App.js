
import {BrowserRouter, Route, NavLink, Routes} from "react-router-dom";
import Navbar from "./components/laoyout/Navbar";
import About from "./components/laoyout/About";
import Home from "./components/laoyout/Home";


// library.add(fab, faCheckSquare, faCoffee)

export default function App() {
  return (
    <BrowserRouter>
       <div className="flex flex-col justify-between ">
        <Navbar/>
      </div>
        <Routes>
          <Route path="/" element={<Home/>}>
          </Route>
          <Route path="/about" element={<About/>}>
          </Route>

        </Routes>
    </BrowserRouter>
  )
}


          //  <NavLink to="/about" activeClassName="active">
          //   about
          // </NavLink>
          // <NavLink to="/" activeClassName="active">
          //   Home
          // </NavLink>
          // h-screen