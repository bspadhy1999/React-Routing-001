import React from 'react'
import axios from 'axios';
import StoreCard from './StoreCard';
import { useState } from 'react';
import { useEffect } from 'react';
export default function Jewelery() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        const fetchData=async ()=>{
            const req=await axios.get("https://fakestoreapi.com/products/category/jewelery");
            setApiData(req.data);
        }
        fetchData();
    }, [])
    
  return (
    <div className="container">
        <div className="row d-flex flex-wrap">
                {
                apiData.map((item,index)=>{
                    return <StoreCard key={index} value={item}/>
                })
                }
        </div>
    </div>
  )
}
