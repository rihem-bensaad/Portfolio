import './Footer.scss'
function Footer(){
    return(
        <div>
            <footer>
                  <img src="" alt="" />
            <ul className="footer">
                
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
            <div className="footer-copyright">
                <p>Copyright @ 2022 All Rights Reserved.</p>
            </div>
    </footer>
        </div>
    );
}

export default Footer