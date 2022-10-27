import './Footer.scss'
function Footer(){
    return(
        <div>
            <footer>
                <h1>rech out to me</h1>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEg4UnUlrBATA/profile-displayphoto-shrink_200_200/0/1639421744515?e=2147483647&v=beta&t=-A6UQ61n1_ETGnMCZbs0A9zVRkgFFF1MeIvWh95WG-U" alt="" />  
            <ul> 
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