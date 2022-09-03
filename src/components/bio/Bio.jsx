import image from "../../assets/eu.jpg"
import '../bio/bio.styles.css'

function Bio(){
    return(
        <div className="container bio">
             <h1 className="bio">Prazer, Jacira</h1>
             <p>Saindo da área de humanas e migrando para a tecnologia após os 50 anos. 
                Dando meus primeiros passos através das oficinas da Pretalab.</p>
             <img className="img" src={image} alt="Foto de Jacira" />
        </div>
       
    )
}
    export default Bio