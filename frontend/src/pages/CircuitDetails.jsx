import { useParams } from 'react-router-dom'

function CircuitDetails() {
    const { id } = useParams()

    return (
        <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <h1>Détails du Circuit #{id}</h1>
            <p>Informations détaillées sur le circuit...</p>
        </div>
    )
}

export default CircuitDetails
