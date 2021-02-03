import React from 'react';

import{Router} from '@reach/router';
import Home from './Home';
// import Hello from './Hello';
import Numbers from './Numbers';
import NumbersColors from './NumbersColors';


const Route = () => {
    return (
        <div>
            <Router>
                <Home path="/home/"/>
                <Numbers path="/:id/"/>
                {/* <Hello path="/:word/"/> */}
                <NumbersColors path="/:id/:color/:bgColor"/>
            </Router>
        </div>
    );
}

export default Route;