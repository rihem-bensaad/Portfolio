import './Footer.scss'
function Footer(){
    return(
        <div>
            <footer>
                <ul className="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Partners</a></li>
                        <li><a href="#">Specialties</a></li>
                        <li><a href="#">Contact Us</a></li>
                </ul>
            <div className="footer-copyright">
                <p>Copyright @ 2022 All Rights Reserved.</p>
            </div>
    </footer>
        </div>
    );
}

export default Footer