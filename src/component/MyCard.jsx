import React, { useEffect, useState } from 'react'
import Card from './Card';

const MyCard = () => {
    const[products,setProducts]=useState([
      // "id":2,"title":"iPhone X","description":"SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...","price":899,"discountPercentage":17.94,"rating":4.44,"stock":34,"brand":"Apple","category":"smartphones","thumbnail":"https://cdn.dummyjson.com/product-images/2/thumbnail.jpg","images":["https://cdn.dummyjson.com/product-images/2/1.jpg","https://cdn.dummyjson.com/product-images/2/2.jpg","https://cdn.dummyjson.com/product-images/2/3.jpg","https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
    ]);
    useEffect(()=>{
      const productInfo=fetch("https://dummyjson.com/products")
      .then((result)=>result.json())
      .then((data)=>{
        setProducts(data.products)
      });
    },[]);
  return (
    
    <div className='container mt-4 d-flex flex wrap'>
      {products.map((product)=>(
        <Card
        id={product.id}
        key={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        brand={product.brand}
        category={product.category}
        thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default MyCard
