import React from 'react';

const Result =(props)=>{
    const{firstName, lastName,email,password,confirmpaaaword}=props.data;
    return(
        <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpaaaword}</p>
        </div>
    )
}
export default Result;