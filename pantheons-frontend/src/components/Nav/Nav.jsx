import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/">
        Home
      </Link>

      <Link className="nav-menu__item" to="/deities">
        Deities
      </Link>

      <Link className="nav-menu__item" to="/new-deity">
        Add Deity
      </Link>
    </div>
  )
}

export default Nav