import React, { Component } from 'react';
// import SubContents from './SubContents';
// import Advertisement from './Advertisement';

import './style.css';

class Main extends Component{
    render(){
        return (
            <div className="main">
                <>{this.props.children}</>
                {/* <div className="sub">
                    <SubContents/>
                    <SubContents/>
                    <SubContents/>

                </div>
                <Advertisement/> */}
            </div>
        );
    }
}

export default Main;