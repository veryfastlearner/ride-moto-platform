import './card.css'

function Card({ title, description, imageurl }) {
    return (
        <div className="card">
            <img src={imageurl} alt={title} className="card-image" style={{ width: '100%', borderRadius: '10px 10px 0 0' }} />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card
