import React, { useEffect, useState } from 'react'

const ProductList = () => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
     getProduct();
    },[])
    const getProduct=async()=>{
        const result=await fetch('http://localhost:5000/products');
        result=awaitresult.json();
        setProducts(result);
    }
    const deleteProduct=async()=>{
        letresult=await fetch(`http://localhost:5000/product/${id}`,{
            method:'delete',
    });
    result=result.json();
    if(result){
        getProducts()
    }
    }
    const searchHandle=async(event)=>{
        let key=event.target.value;
        let result=await fetch(`http://localhost:5000/product/${key}`)
        result=await result.json();
        if(result){
            setProducts(result)
        }
    }

  return (
    <div className=''>
        <h3> products list</h3>
        <input type text placeholder='searchre'></input>
        <ul>
            <li> s no.</li>
            <li> name</li>
            <li>price</li>
            <li>catagory</li>
            <li>operation</li>
        </ul>
    {
            products.length>0 ? products.map((item,index)=>
            <ul>
            <li> item+1</li>
            <li> item.name</li>
            <li> item.price</li>
            <li>item.catagory</li>
            <li><button onClick={()=>deletProduct}>delete</button>
             <Link to="/update">Update</Link></li>
            
        </ul>
        )
        :<h1>No results founds</h1>
    }
      
    </div>
  )
}

export default ProductList
