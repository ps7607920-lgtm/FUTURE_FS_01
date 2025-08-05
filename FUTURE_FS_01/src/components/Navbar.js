import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px' }}>
      <Link to="/" style={{ margin: '10px' }}>Home</Link>
      <Link to="/about" style={{ margin: '10px' }}>About</Link>
      <Link to="/projects" style={{ margin: '10px' }}>Projects</Link>
      <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
    </nav>
  );
}

export default Navbar;
