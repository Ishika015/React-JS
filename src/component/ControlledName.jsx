import {useState} from 'react'
import Changename from './Changename'

const ControlledName = () => {
    const[name,setName]=useState("KIET");
  const[sname,setSName]=useState("MCA");
  
  return (
    <div className='container mt-3'>
      <Changename name={name} onUpdate={()=>setName("KIET MCA")} />
    <Changename name={sname} onUpdate={()=>setSName("MCA KIET")} />
    </div>
  )
}

export default ControlledName
