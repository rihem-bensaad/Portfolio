import './Navbar.scss';

export default function Navbar() {
    return (
      <section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a href="#!"> Rihem BEN SAAD</a>
    </div>
    <nav>
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul className="nav-list">
  <li>
      <a href="https://www.linkedin.com/in/rihem-ben-saad/" className='linkedin' target="_blank">
        <i className='fa fa-linkedin'></i>
      </a>
    </li>
    <li>
      <a href="https://github.com/rihem-bensaad" className='github' target="_blank">
        <i className='fa fa-github'></i>
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/profile.php?id=100006434415288" className='facebook' target="_blank">
        <i className='fa fa-facebook'></i>
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/rihem_b_saad/" className='instagram' target="_blank">
        <i className='fa fa-instagram'></i>
      </a>
    </li>
  </ul>
</nav>
    </div>
</section>
    );
  }