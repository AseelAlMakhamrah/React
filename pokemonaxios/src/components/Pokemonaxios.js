import React , {useState} from "react";
import axios from 'axios';
import './style.css';

const Pokemonaxios =(props)=>{
    const [poke, setPoke]=useState([]);
    const onClick =(e)=>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964').then(result=>{
            setPoke(result.data.results);
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
export default Pokemonaxios;