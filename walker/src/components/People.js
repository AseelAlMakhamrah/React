import React, { useEffect, useState } from 'react';
import { navigate}  from '@reach/router';
import axios from 'axios';
import './style.css';
// import { Box, Part, Head, Text } from './style.css';

const People =({id})=>{
    const [people , setPeople]=useState([]);

    useEffect(()=>{
    axios.get('https://swapi.dev/api/people/'+ id).then(result=> {setPeople(result.data)})
    .catch(()=> navigate('/error'));
    },[id],2500);
    
//     useEffect(()=>{
//         axios.get('https://swapi.dev/api/people/'+ id).then(result=> {setPeople(result.data)})
//         .catch(()=> navigate('/error'));
//         },[id],2500);

    



return(
    <div className= "Box">
            <div className="Head">{people.name}</div>
            <div className= "Part">
                <div className="Text">Height:</div>
                <h3>{people.height} cm</h3>
            </div>
            <div className= "Part">
                <div className="Text">Mass:</div>
                <h3>{people.mass} kg</h3>
            </div>
            <div className="Part">
                <div className="Text">Hair Color:</div>
                <h3>{people.hair_color}</h3>
            </div>
            <div className="Part">
                <div className="Text">Skin Color:</div>
                <h3>{people.skin_color}</h3>
            </div>
        </div>
    )
}
export default People;

