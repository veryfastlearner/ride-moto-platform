import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>À PROPOS DE:</h3>
                    <h4>MOTORCYCLE TRIP Tunisia</h4>
                    <p>
                        Nous sommes passionnés par l'aventure à deux roues et nous nous
                        engageons à offrir à nos clients une expérience inoubliable de
                        découverte du Maroc à moto.
                    </p>
                </div>

                <div className="footer-section links">
                    <h3>NOS CIRCUITS</h3>
                    <ul>
                        <li><Link to="/circuits">Beautiful Morocco tours</Link></li>
                        <li><Link to="/circuits">Royal wonderful tours</Link></li>
                        <li><Link to="/circuits">Luxury Road tours</Link></li>
                        <li><Link to="/circuits">Sahara tours</Link></li>
                        <li><Link to="/circuits">Royal Enfield Himalayan tours</Link></li>
                        <li><Link to="/circuits">Tropical tours</Link></li>
                    </ul>
                </div>

                <div className="footer-section links">
                    <h3>NOS CIRCUITS</h3>
                    <ul>
                        <li><Link to="/circuits">Atlas sahara tours</Link></li>
                        <li><Link to="/circuits">Berbère sahara tours</Link></li>
                        <li><Link to="/circuits">Berbère tours</Link></li>
                        <li><Link to="/circuits">Atlantic vibes tours</Link></li>
                        <li><Link to="/circuits">Adrénaline tours</Link></li>
                        <li><Link to="/circuits">Marrakech adventure tours</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h3>CONTACT INFORMATION</h3>
                    <p>Contactez-nous pour obtenir plus d'informations.</p>
                    <div className="contact-item">
                        <span className="icon">📞</span>
                        <div>
                            <p>+212 663 000 470</p>
                            <p>+212 663 635 550</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <span className="icon">✉️</span>
                        <p>booking@motorcycletripmorocco.com</p>
                    </div>
                    <div className="contact-item">
                        <span className="icon">📍</span>
                        <p>Avenue Mohamed 5 a côté de al omran et KFC Guéliz Marrakech-Maroc.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
