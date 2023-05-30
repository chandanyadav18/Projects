import React, { useState, } from 'react'

const AddProduct = () => {
    const[name,setName]=useState('')
    const[price,setPrice]=useState('')
    const[category,setCategory]=useState('')
    const[company,setCompany]=useState('')
    const[error,setError]=useState('false')

    const addProduct=async()=>{
        console.warn(!name)
        if(!name|| !price||){
            setError(true);
            return false
        }
        const userId=JSON.parse(localStorage.get('user'))._id;
        console.warn(userId._id)
        const result=await fetch('http://localhost:5000/add-product',{
            method:'post',
            body: json.stringify({name,price,category,company,userId}),
            headers:{
              'content-Type':'application/json'},
            });
            result=await result.json
    }



  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input type="text" placeholder="Enter product name" className='inputBox'
       value={name} onChange={(e)=>{setName(e.target.value)}}/>

     {error && !name  && <span className='invalid-input'>Enter valid Name</span>}

      <input type="text" placeholder="Enter price" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {error && !price  && <span className='invalid-input'>Enter valid Name</span>}


      <input type="text" placeholder="Enter product category" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {error && !catagory  && <span className='invalid-input'>Enter valid Name</span>}



      <input type="text" placeholder="Enter company" className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
        {error && !company  && <span className='invalid-input'>Enter valid Name</span>}


       <button  onClick= {addProduct}className='appButton'>Add Product</button>

    </div>
  )
}

export default AddProduct
