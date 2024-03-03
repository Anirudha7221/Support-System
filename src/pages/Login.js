import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom";

function Login(){

    const [username, setUsername]=useState('');
    const [password, setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(username)=>{
        if(!checkUser(username)){
            window.alert("Login Succesfull");
            setTimeout(() => {
                navigate('/home');
            }, 5000);
        }
        else{
            window.alert("Login Failed please enter correct username and password");
        }
    }

    function checkUser(username){
        for(let i=0;i<localStorage.length;i++){
            var key=localStorage.key(i);
            var checkValue=localStorage.getItem(key);
            try{
                const value=JSON.parse(checkValue);
                for(let prop in value){
                    if(value.hasOwnProperty(prop) && value[prop]=== username){
                        return true;
                    }
                }
            }
            catch(error){
                console.log(error);
            }
        }
        return false
    }

    return(
       <form id="login-form">
            <h1>Login</h1>
            <div className="login-item">
                <label>Username :</label>
                <input type="text" placeholder="Enter email or username" />
            </div>
            <div className="login-item">
                <label>Password :</label>
                <input type="password" placeholder="Enter password" />
            </div>
            <button className="submit-btn" onClick={handleSubmit(username)}>Login</button>
       </form>
    )
}

export default Login;