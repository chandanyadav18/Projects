import React, { useState,useParams,useEffect,useNavigate } from 'react'
import { json } from 'react-router-dom'

const UpdateProduct = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    //const[error,setError]=useState('false')
    const navigate=useNavigate()
    const params=useParams();

     useEffect(()={
        
        getProductDetails();
     },[]);
     const getProductDetails=async()=>{
        let result=await fetch('http://localhost:5000/product/${id}');
        result=await result.json();
        console.warn(result)
        setName(result.name)
        setPrice(result.price)
        setCategory(result.category)
        setCompany(result.company)
     }
     const updateProduct=async()=>{
        console.warn(name,price,category,company)
        let result=fetch('http://localhost:5000/product/${params.id}',
        mehod='put' ,
        body : JSON.stringify({name,price,category,company}),
        headers :{
            'content-Type':applicatio/json
        });
        result=(await result).json()
        console.warn(result) 
        navigate('/')
        
    }


 



  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" placeholder="Enter product name" className='inputBox'
       value={name} onChange={(e)=>{setName(e.target.value)}}/>

     <span className='invalid-input'>Enter valid Name</span>

      <input type="text" placeholder="Enter price" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
       <span className='invalid-input'>Enter valid Name</span>


      <input type="text" placeholder="Enter product category" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <span className='invalid-input'>Enter valid Name</span>



      <input type="text" placeholder="Enter company" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <span className='invalid-input'>Enter valid Name</span>


       <button  onClick= {updateProduct}className='appButton'>updateProduct</button>

    </div>
  )
}

export default UpdateProduct