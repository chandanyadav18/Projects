import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'


const SignUp = () => {
  const [name,setName]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");

  const navigate=useNavigate
  useEffect(()=>{
  const auth=localStorage.getItem('user');
  if(auth){
    navigate('/')  
  }
})

  const collectData=async()=>{
    console.log(name,email,password)
    let result=await fetch('http://localhost:5000/register',{
      method:'post',
      body: json.stringify({name,email,password}),
      headers:{
        'content-Type':'application/json'},
      
    })
    result=await result.json()
    console.warm(result);
    localStorage.
    if(result){
      navigate('/');

    }

  }
  return (
    <div>
       <div className="register">
      <h1> register</h1>
      <input className='inputBox' type="text" 
       value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
      <input className='inputBox' type="email"
      value={name} onChange={(e)=>setEmail(e.target.value)}  placeholder='enter email'/>
      
      <input className='inputBox' type='password'
      value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='enter password'/>
      
      <button onClick={collectData} className="appButton" type="button"> sing up</button>
       </div>
    </div>
  )
}

export default SignUp
