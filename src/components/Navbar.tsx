export default function Navbar() {
    return (
      <nav className="navigation">
        <h4 className="name">Rihem BEN SAAD</h4>
        <div className="navigation-menu">
          <ul>
            <li>
                <a href="https://www.facebook.com/profile.php?id=100006434415288" className="fa fa-facebook" target="_blank"></a>
            </li>
            <li>
                <a href="https://www.instagram.com/rihem_b_saad/" className="fa fa-instagram" target="_blank"></a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/rihem-ben-saad/" className="fa fa-linkedin" target="_blank"></a>
            </li>
            <li>
                <a href="https://github.com/rihem-bensaad" className="fa fa-github" target="_blank"></a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }