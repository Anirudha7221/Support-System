import React from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"

function Register(){

    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [age, setAge]=useState();
    const [password, setPassword]=useState('');
    const navigate=useNavigate();

    const GenerateRandomKey =(length)=>{
        const char='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomKey='';
        for(let i=0;i<char.length;i++){
            randomKey+=char.charAt(Math.floor(Math.random()*char.length));
        }
        return randomKey;
    }

    const obj={
        Name :username,
        Email :email,
        Age :age,
        Password :password
    };

    const myObj=JSON.stringify(obj);

    localStorage.setItem(GenerateRandomKey(8), myObj);

    const hadleSubmit=()=>{
        window.alert("Registration Sucessfull");
        setTimeout(() => {
            navigate('/login');
        }, 5000);
    }

    return(
        <form id="register-form">  
            <h1>Register</h1>
            <div className="register-item">
                <label>Username : </label>
                <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} />
            </div>
            <div className="register-item">
                <label>Email : </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div className="register-item">
                <label>Age : </label>
                <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
            </div>
            <div className="register-item">
                <label>Password : </label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <button className="submit-btn" onClick={hadleSubmit}>Submit</button>
        </form>
    )
}

export default Register;