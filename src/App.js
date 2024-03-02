import React from "react";
import { useState } from "react";
import SupportForm from "./component/SupportForm";
import Response from "./component/Responce";
import FAQ from "./component/FAQ";
import "./App.css";

function App(){
  const [resp, setResp]=useState('');

  const hadleSubmit=()=>{
    const Responce="Here is a responce.....";
    setResp(Responce);
  };

  return(
    <div id="containeer">
        <h1 id="Title">Support System</h1>
        <SupportForm onSubmit={hadleSubmit}></SupportForm>
        <FAQ></FAQ>
        { resp && <Response response={resp}></Response>}
    </div>
  );
}

export default App;