import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
        <div className = "logo">
          <h3>Logo</h3>
        </div>

        <ul>
          <li >
            <Link to="/menu" style={{ textDecoration: 'none' }}>Registration</Link>
          </li>
          <li >
            <Link to="/location" style={{ textDecoration: 'none' }}>Rent</Link>
          </li>
          <li >
            <Link to="/about" style={{ textDecoration: 'none' }}>About</Link>
          </li>
          <li >
            <Link to="/contact" style={{ textDecoration: 'none' }}>Contact</Link>
          </li>
        </ul>

        <button className = "logOutButton">Logout</button>
      </nav>
    );
}

export default Navigation;