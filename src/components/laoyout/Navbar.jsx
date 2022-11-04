import {NavLink} from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
        <NavLink className="btn btn-ghost normal-case text-xl"   to="/about" activeclassname="active">abOut</NavLink>
        <NavLink className="btn btn-ghost normal-case text-xl" to="/" activeclassname="active">Home</NavLink>
    </div>
  )
}

export default Navbar