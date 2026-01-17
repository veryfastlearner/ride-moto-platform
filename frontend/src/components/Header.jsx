import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <Link to="/" className="logo">🏍️ RideMoto</Link>
            <nav>
                <ul>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/circuits">Circuits</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/reservation" className="reservation-btn">Réservation</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
