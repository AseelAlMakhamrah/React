import React, { useState } from  'react';
    
    
const UserForm = props => {
    const {input, setInput} = props;
    const onChange =(e) =>{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        });
    }  
    
    return(
        <form>
            <div className ="form-group">
                <label htmlFor="firtName">First Name</label>
                <input onChange={onChange} type="text" name="firstName"/>
            </div>
            <div className ="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange={onChange} type="text" name="lastName"/>
            </div>
            <div className ="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={onChange} type="text" name="email"/>
            </div>
            <div className ="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={onChange} type="password" name="password"/>
            </div>
            <div className ="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input onChange={onChange} type="password" name="confirmpassword"/>
            </div>
        </form>
    );
};
    
export default UserForm;