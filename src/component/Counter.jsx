import React, { useEffect, useState } from 'react'

const Counter = () => {
    const[count,setCount]=useState(0);
    const checkValue=()=>{
        return count==0?"zero":count;
    }
    const checkCounter=()=>{
        return count==0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 text-dark rounded"
    }
    const increment=()=>{
        setCount(count+1);
    };
    const decrement=()=>{
        
        if(count>0)
        {
            setCount(count-1);
        }
    };
    useEffect(()=>{console.log(count)},[count])
  return (
    <div className='container mt-3'>
      <button className='btn btn-primary' onClick={decrement}>Decrement</button>
      <span className={checkCounter()}>   
      function calling
      {/* {count} */}
      {checkValue()}
      </span>
      <button className='btn btn-primary' onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter



// import React, { useEffect, useState } from 'react'

// const Counter = () => {
//     const[count,setCount]=useState[0];
//     const checkValue=()=>{
//         return count==0?"zero":count;
//     }
//     const checkCounter=()=>{
//         return count==0?"badge bg-danger m-3 p-3 rounded text-white":"badge bg-warning m-3 p-3 text-dark rounded"
//     }
//     const increment=()=>{
//         setCount[count+1];
//     };
//     const decrement=()=>{
        
//         if(count>0)
//         {
//             setCount[count-1];
//         }
//     };
//     useEffect(()=>{},[count]);
//   return (
//     <div className='container mt-3'>
//       <button className='btn btn-primary' onClick={decrement()}>Decrement</button>
//       <span className='checkCounter()'>
//       {/* {count} */}
//       {checkValue()}
//       </span>
//       <button className='btn btn-primary' onClick={increment()}>Increment</button>
//     </div>
//   )
// }

// export default Counter
