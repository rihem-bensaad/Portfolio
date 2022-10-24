import './Navbar.scss';

export default function Navbar() {
    return (
      <section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a href="#!">🍀 Clover Clothing</a>
    </div>
    <nav>
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul className="nav-list">
    <li><a href="#!">Home</a></li>
    <li><a href="#!">Shop</a></li>
    <li>
      <a href="#!">Services</a>
      <ul className="nav-dropdown">
        <li><a href="#!">Web Design</a></li>
        <li><a href="#!">Web Development</a></li>
        <li><a href="#!">Graphic Design</a></li>
      </ul>
    </li>
    <li><a href="#!">About Us</a></li>
    <li><a href="#!">Contact</a></li>
  </ul>
</nav>
    </div>
</section>
    );
  }