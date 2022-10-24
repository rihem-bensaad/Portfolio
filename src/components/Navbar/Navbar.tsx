import './Navbar.scss';

export default function Navbar() {
    return (
      <section className="navigation">
  <div className="nav-container">
    <div className="brand">
      <a href="#!">🍀 Rihem BEN SAAD</a>
    </div>
    <nav>
  <div className="nav-mobile">
    <a id="nav-toggle" href="#!"><span></span></a>
  </div>
  <ul className="nav-list">
  <li>
      <a href="#" className='linkedin'>
        <i className='fa fa-linkedin'></i>
      </a>
    </li>
    <li>
      <a href="#" className='github'>
        <i className='fa fa-github'></i>
      </a>
    </li>
    <li>
      <a href="#" className='facebook'>
        <i className='fa fa-facebook'></i>
      </a>
    </li>
    <li>
      <a href="#" className='instagram'>
        <i className='fa fa-instagram'></i>
      </a>
    </li>
  </ul>
</nav>
    </div>
</section>
    );
  }