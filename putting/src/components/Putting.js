import React, {Component} from 'react';

class Putting extends Component{
    constructor(props){
        super(props);
        this.state={
            ageClicked: props.age
        }
    }
    clickedOfAge=()=>{
        this.setState({ageClicked: this.state.ageClicked+1})
    }
    render(){
        const {firstName, lastName, hairColor } = this.props;
        return (
            <div>
                <h1>{firstName},{lastName}</h1>
                <p>Age : {this.state.ageClicked}</p>
                <p>Hair color : {hairColor}</p>
                <button onClick = {this.clickedOfAge}>Birthday button for {firstName}, {lastName}</button>
            </div>
        )
    }
} 

export default Putting;