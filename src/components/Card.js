// custom
import '../custom/card.scss';

export default function Card({icon, description, title, text} ) {
    return (
        <div className="feature-item">
            <img src={icon} alt={description} className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>{text}</p>
        </div>
    )
}

  
        
        
       