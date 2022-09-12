import image from "../../assets/eu.jpg"
import '../bio/bio.styles.css'

function Bio(){
    return(
        <div className="bio">
            <img className="img" src={image} alt="Foto de Jacira" />
             <h1 className="bio-texto">Prazer, Jacira</h1>             
             <p>Migrando da área de humanas para a tecnologia após os 50 anos. <br />
                Dando meus primeiros passos através das oficinas da Pretalab.</p>
              
             
        </div>
       
    )
}
    export default Bio