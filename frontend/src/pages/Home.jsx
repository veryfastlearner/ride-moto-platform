import { Link } from 'react-router-dom'
import Card from '../components/Card'
import './Home.css'
import routeAinDraham from '../assets/circuits/route-de-ain-draham.jpg'
import routeCentraleDesert from '../assets/circuits/route-sidi.jpg'
import routeAtlas from '../assets/circuits/kef.jpeg'
import hero from '../assets/hero.jpg'

function Home() {
    const circuits = [
        {
            id: 1,
            title: 'Ciruit Nord',
            description: 'Route: Tunis → Béja → Ain Draham → Tabarka → Bizerte → Tunis',
            imageurl: routeAinDraham
        },
        {
            id: 2,
            title: "Centrale et Desert",
            description: 'Route: Sousse → Kairouan → Sidi Bouzid → Tozeur → Douz → Matmata → Gabès → Sfax.',
            imageurl: routeCentraleDesert
        },
        {
            id: 3,
            title: 'Atlas Mountain Ride',
            description: 'Route: Kasserine → Thala → Djebel Chambi → Maktar → Le Kef.',
            imageurl: routeAtlas
        }
    ]

    return (
        <div className="home">
            <section className="hero" style={{ backgroundImage: `url(${hero})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
