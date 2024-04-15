import { useState } from "react"

const Changename=({sname})=>{
  //let sname=props;
  const[name,setName]=useState(sname);
  return(
    <div className="conatainer mt-3">
      <div>{name}</div>
      <button className="btn btn-warning" onClick={()=>setName("JAVASCRIPT")}>Change</button>
    </div>
  )
}
// const Changename = (props) => {              //props is an object
//     let {name,onUpdate}=props;            //destructuring -> so data will come in the form of object -> wahi variable banaaenge jo waha pass ho raha hai
  
//   return (
//     <div className="conatiner mt-3">
//       <div>{name}</div>
//       <button className="btn btn-warning" onClick={onUpdate}>Change Name</button>
    
//     </div>
//   )
// }

export default Changename
