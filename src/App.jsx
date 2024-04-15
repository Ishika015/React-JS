//import './App.css'
import Languages from './component/Languages';
//  import Msg from './component/Msg';
//  import { Display } from './component/Msg';
//import Counter from './component/Counter';
// import Changename from "./component/Changename";
//import ControlledInfo from './component/ControlledInfo';
import ControlledName from './component/ControlledName';
import { useState } from 'react';
import Changename from './component/Changename';

function App() {        //function
   const [count,setCount]=useState(0)
   const [name,setName]=useState("KIET");
   const [sname,setSName]=useState("MCA");

  
  // return (
  //   <>                               //istead of this we can use <React.Fragment> </React.Fragment>
  //     <h1>KIET MCA</h1>
  //     <h1>MCA </h1>
  //   </>
  // )

  // return (
  //   <div>
  //   <h1>KIET</h1>
  //   <h1>MCA</h1>
  //   </div>
  // );

  return(
    <>
    {/* <Msg/>
    <Display/> */}
    {/* <Languages/>
    <Counter/> */}
    {/* <ControlledName/> */}
    {/* <ControlledInfo/> */}
    <Changename name={name} onUpdate={()=>setName("KIET MCA")}/>
    <Changename name={sname} onUpdate={()=>setSName("MCA KIET")}/>
    </>
  );
}

export default App
