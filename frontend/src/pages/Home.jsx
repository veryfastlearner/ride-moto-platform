import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Découvrez les Plus Beaux Circuits Moto</h1>
                    <p>Vivez des expériences inoubliables sur les routes les plus spectaculaires</p>
                    <Link to="/circuits" className="cta-button">Voir les Circuits</Link>
                </div>
            </section>

            <section className="features">
                <div className="feature-card">
                    <div className="feature-icon">🏍️</div>
                    <h3>Circuits Variés</h3>
                    <p>Des parcours adaptés à tous les niveaux</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">🗺️</div>
                    <h3>Itinéraires Détaillés</h3>
                    <p>GPS et cartes pour chaque circuit</p>
                </div>
                <div className="feature-card">
                    <div className="feature-icon">👥</div>
                    <h3>Communauté Active</h3>
                    <p>Rejoignez des passionnés comme vous</p>
                </div>
            </section>

            <section className="popular-circuits">
                <h2>Circuits Populaires</h2>
                <div className="circuits-grid">
                    <div className="circuit-preview">
                        <div className="circuit-image">🏔️</div>
                        <h3>Route des Alpes</h3>
                        <p>250 km • Niveau: Intermédiaire</p>
                        <Link to="/circuits/1" className="view-button">Voir Détails</Link>
                    </div>
                    <div className="circuit-preview">
                        <div className="circuit-image">🌊</div>
                        <h3>Côte d'Azur</h3>
                        <p>180 km • Niveau: Débutant</p>
                        <Link to="/circuits/2" className="view-button">Voir Détails</Link>
                    </div>
                    <div className="circuit-preview">
                        <div className="circuit-image">🌲</div>
                        <h3>Forêt des Vosges</h3>
                        <p>320 km • Niveau: Avancé</p>
                        <Link to="/circuits/3" className="view-button">Voir Détails</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
