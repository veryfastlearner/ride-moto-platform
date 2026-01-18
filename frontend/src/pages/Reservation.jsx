import hero from '../assets/hero.jpg'

function Reservation() {
    return (
        <div className="reservation-page">
            <div className="page-header" style={{
                backgroundImage: `url(${hero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 2rem 4rem',
                color: 'white',
                marginBottom: '2rem',
                textAlign: 'center'
            }}>
                <h1 style={{ color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Réservation</h1>
            </div>
            <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                <p>Formulaire de réservation...</p>
            </div>
        </div>
    )
}

export default Reservation
