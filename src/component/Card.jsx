import React from 'react'

const Card = (props) => {
    const{title,description,price,brand,category,thumbnail}=props;

  return (
    <div>
      <div className="card m-2" style={{width: "18rem",height:"28rem"}}>
  <img className="card-img-top" 
  src={thumbnail} 
  height={'180px'}
  alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text overflow-auto">{description}</p>
  <div className='d-flex flex-row justify-content-between'>
   <div>Price:{price}RS</div> 
   <div>Brand:{brand}</div> 
   <div>Categoy:{category}</div> 
  </div>
</div>
</div>
</div>
  );
};

export default Card
