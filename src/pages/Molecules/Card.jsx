import "../styles/Card.scss";


const Card = ({ name, image, description, link }) => {

    return (
        <div className="Card Transition">
            <div className="Card__Gradient Transition">
                <img className="Card__Image" src={image} alt={name} />
            </div>
            <div className="Card__Items">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className="Card__Link Transition">
                <a className="Card__link--active" href={link}>Interested</a>
            </div>
        </div>
    );
};

export {Card};