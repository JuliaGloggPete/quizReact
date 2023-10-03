import { Link } from "react-router-dom";

const Result =(props) =>{

    return(
    
    <section>
        <h2>Resultat</h2>
        <p>Du fick {props.score} rätt svar</p>
        <Link to= "/">
        <button>Börja om !</button>
        </Link>
      
    </section>
    
    )
    
    }
    
    
    export default Result;