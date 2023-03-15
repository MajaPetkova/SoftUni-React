import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const StarshipList =()=>{
    const[starships, setStarships] = useState([]);

    useEffect(()=>{
        fetch(`https://swapi.dev/api/starships`)
        .then(res=>res.json())
        .then(result=> setStarships(result.results))
    }, []);

    
    return(
        <ul>
           <h1>Starship List</h1>
          {starships.map((x, i) =><li key={x.name}> <Link  to={`/products/${i + 1}`}>{x.name}</Link></li>)}
       </ul>
    )
}
export default StarshipList;