// import React from 'react'
// import ControlledInfo from './ControlledInfo';

const Info = (props) => {
    let {lang}=props;     //destructuring
  return (
    <div>
      <h1>Top Programming Languages</h1>
      {lang.map((item,index)=>(
        <li key={index}>{item}</li>
      ))
      }
    </div>
  )
}

export default Info
