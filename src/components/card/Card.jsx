import image from "../../assets/eu.jpg"
import "./card.styles.css"

function Card(){
    return(
        <div className="card-container">
            <img src={image} alt="Foto de Jacira" />
        </div>
    )
}
    export default Card