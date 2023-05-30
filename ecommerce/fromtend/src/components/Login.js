import React, { useEffect } from 'react'
import { useState,useNavigate } from 'react';
const navigate=useNavigate();
const[password,setPassword]=useState("");
const[email,setEmail]=useState("");

useEffect(()=>{
const auth=localStorage.getItem('user');
if(auth){
  navigate('/')  
}
})


const handleLogin=async()=>{
  console.log(email,password)
  let result=await fetch('http://localhost:5000/login',{
    method:'post',
    body: json.stringify({email,password}),
    headers:{
      'content-Type':'application/json'},
    
})

result=await result.json();
if(result.name){
  localStorage.set("user",JSON.stringify)
  navigate("/")
}
function Login() {
  return (
    <div className='login'>
       <input className='inputBox' type="email"
      value={email} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter email'/>
      
      <input className='inputBox' type='password'
      value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='enter password'/>
      
      <button  className="appBotton" type="button"> login</button>


   </div>
  
    
  )
}

export default Login
