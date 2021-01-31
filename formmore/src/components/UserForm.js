import React, { useState } from  'react';
    
    
const UserForm = props => {
    const [state,setState]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:"",
    })


    const onChangeHandler =(e) =>{
        setState({
            ...state,
            [e.target.name]:e.target.value,
        });
    }  
    
    return(
        <form>
            <div className ="form-group">
                <label htmlFor="firtName">First Name</label>
                <input onChange={onChangeHandler} type="text" name="firstName"/>
            </div>
            <div className ="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChangeHandler} type="text" name="lastName"/>
            </div>
            <div className ="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChangeHandler} type="text" name="email"/>
            </div>
            <div className ="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChangeHandler} type="password" name="password"/>
            </div>
            <div className ="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input onChange={onChangeHandler} type="password" name="confirmpassword"/>
            </div>
            <div className="validation">
                {(state.firstName.length !==0 && state.firstName.length< 2 )&& <p>First Name field must be at least 2 characters.</p> }
                {(state.lastName.length !==0 && state.lastName.length< 2 )&& <p>Last Name field must be at least 2 characters.</p> }
                {(state.email.length !==0 && state.email.length< 5)&& <p>Email field must be at least 5 characters.</p> }
                {(state.password.length !==0 && state.password.length< 8 )&& <p>Password field must be at least 8 characters.</p> }
                {(state.confirmpassword.length !== state.password )&& <p>Confirm Password field must be match with Password.</p> }

            </div>
        </form>
    );
};
    
export default UserForm;