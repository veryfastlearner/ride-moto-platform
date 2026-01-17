import { Link } from 'react-router-dom'
import Card from '../components/Card'
import './Home.css'

function Home() {
    const circuits = [
        {
            id: 1,
            title: 'Route des Alpes',
            description: '250 km • Niveau: Intermédiaire',
            imageurl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop'
        },
        {
            id: 2,
            title: "Côte d'Azur",
            description: '180 km • Niveau: Débutant',
            imageurl: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'
        },
        {
            id: 3,
            title: 'Forêt des Vosges',
            description: '320 km • Niveau: Avancé',
            imageurl: 'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=400&h=300&fit=crop'
        }
    ]

    return (
        <div className="home">
            <section className="hero">
                <h1>Découvrez les Plus Beaux Circuits Moto</h1>
                <p>Vivez des expériences inoubliables sur les routes les plus spectaculaires</p>
                <Link to="/circuits" className="cta-button">Voir les Circuits</Link>
            </section>

            <section className="circuits-section">
                <h2>Circuits Populaires</h2>
                <div className="cards-container">
                    {circuits.map(circuit => (
                        <Card
                            key={circuit.id}
                            title={circuit.title}
                            description={circuit.description}
                            imageurl={circuit.imageurl}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
