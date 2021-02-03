import React, { useEffect, useState } from 'react';
import { navigate}  from '@reach/router';
import axios from 'axios';
import './style.css';

const Planet =({id})=>{
    const [planet , setPlanet]=useState([]);

    useEffect(()=>{
    axios.get('https://swapi.dev/api/planets/'+ id).then(result=> {setPlanet(result.data)})
    .catch(()=> navigate('/error'));
    },[id],2500);
    
//     useEffect(()=>{
//         axios.get('https://swapi.dev/api/people/'+ id).then(result=> {setPeople(result.data)})
//         .catch(()=> navigate('/error'));
//         },[id],2500);

    



return(
    <div className= "Box">
            <div className="Head">{planet.name}</div>
            <div className= "Part">
                <div className="Text">Terrain:</div>
                <h3>{planet.terrain}</h3>
            </div>
            <div className= "Part">
                <div className="Text">Climate:</div>
                <h3>{planet.climate}</h3>
            </div>
            <div className="Part">
                <div className="Text">Surface Water:</div>
                <h3>{planet.surface_water}</h3>
            </div>
            <div className="Part">
                <div className="Text">Population:</div>
                <h3>{planet.population}</h3>
            </div>
        </div>
    )
}
export default Planet;

