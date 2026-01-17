import { Link } from 'react-router-dom'
import './Circuits.css'

const circuitsData = [
    {
        id: 1,
        name: 'Route des Alpes',
        distance: '250 km',
        level: 'Intermédiaire',
        duration: '1 jour',
        icon: '🏔️',
        description: 'Traversez les cols mythiques des Alpes françaises'
    },
    {
        id: 2,
        name: 'Côte d\'Azur',
        distance: '180 km',
        level: 'Débutant',
        duration: '6 heures',
        icon: '🌊',
        description: 'Longez la Méditerranée sur des routes panoramiques'
    },
    {
        id: 3,
        name: 'Forêt des Vosges',
        distance: '320 km',
        level: 'Avancé',
        duration: '2 jours',
        icon: '🌲',
        description: 'Explorez les routes sinueuses à travers les forêts'
    },
    {
        id: 4,
        name: 'Vallée de la Loire',
        distance: '200 km',
        level: 'Débutant',
        duration: '1 jour',
        icon: '🏰',
        description: 'Découvrez les châteaux le long de la Loire'
    },
    {
        id: 5,
        name: 'Pyrénées Express',
        distance: '280 km',
        level: 'Intermédiaire',
        duration: '1 jour',
        icon: '⛰️',
        description: 'Parcourez les cols spectaculaires des Pyrénées'
    },
    {
        id: 6,
        name: 'Bretagne Sauvage',
        distance: '220 km',
        level: 'Débutant',
        duration: '1 jour',
        icon: '🌊',
        description: 'Explorez les côtes bretonnes et leurs paysages uniques'
    }
]

function Circuits() {
    return (
        <div className="circuits-page">
            <div className="page-header">
                <h1>Nos Circuits Moto</h1>
                <p>Découvrez notre sélection de circuits exceptionnels</p>
            </div>


            <div className="circuits-list">
                {circuitsData.map(circuit => (
                    <div key={circuit.id} className="circuit-card">
                        <div className="circuit-icon">{circuit.icon}</div>
                        <div className="circuit-info">
                            <h2>{circuit.name}</h2>
                            <p className="circuit-description">{circuit.description}</p>
                            <div className="circuit-details">
                                <span className="detail-item">📏 {circuit.distance}</span>
                                <span className="detail-item">⏱️ {circuit.duration}</span>
                            </div>
                            <div className="circuit-actions">
                                <Link to={`/circuits/${circuit.id}`} className="details-btn">
                                    Voir Détails
                                </Link>
                                <Link to="/reservation" className="reserve-btn">
                                    Réserver
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Circuits
