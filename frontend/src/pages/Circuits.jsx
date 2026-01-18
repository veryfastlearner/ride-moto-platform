import { Link } from 'react-router-dom'
import Card from '../components/Card'
import './Circuits.css'
import routeAinDraham from '../assets/circuits/route-de-ain-draham.jpg'
import routeCentraleDesert from '../assets/circuits/route-sidi.jpg'
import routeAtlas from '../assets/circuits/kef.jpeg'
import hero from '../assets/hero.jpg'

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

function Circuits() {
    return (
        <div className="circuits-page">
            <div className="page-header" style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 2rem 4rem',
                color: 'white',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Nos Circuits Moto</h1>
                <p style={{ color: 'white', textShadow: '0 1px 2px rgba(0,0,0,0.5)', fontSize: '1.2rem' }}>Découvrez notre sélection de circuits exceptionnels</p>
            </div>

            <div className="circuits-container">
                <div className="circuits-list">
                    {circuits.map(circuit => (
                        <Card
                            key={circuit.id}
                            title={circuit.title}
                            description={circuit.description}
                            imageurl={circuit.imageurl}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Circuits
