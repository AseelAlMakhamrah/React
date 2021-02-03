import React , {useState} from "react";
// import {MainButton , Poke} from './style';
import './style.css';

const Pokemon =(props)=>{
    const [poke, setPoke]=useState([]);
    const onClick =(e)=>{
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964').then(result=>{
            return result.json();
        })
        .then(result=>{
            setPoke(result.results);
        })
        .catch(error => {
            console.log(error);
        })
    }
    return(
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {poke.map((mon, i) =>(
                <div className="Poke" key={i}>{mon.name}</div>
            ))}
    </div>
);
}
export default Pokemon;