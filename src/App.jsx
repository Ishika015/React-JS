//import './App.css'
//import Languages from './component/Languages';
//  import Msg from './component/Msg';
//  import { Display } from './component/Msg';
//import Counter from './component/Counter';
// import Changename from "./component/Changename";
// import ControlledInfo from './component/ControlledInfo';
// import ControlledName from './component/ControlledName';
// import { useState } from 'react';
// import Changename from './component/Changename';
// import MyCounter from './component/MyCounter';
// import MyCard from "./component/MyCard";
import { Route,Routes } from "react-router-dom";
import HomePage from "./component/HomePage";
import MyCard from "./component/MyCard"
import MyCounter from './component/MyCounter';
import Languages from './component/Languages';
import NavBar from './component/NavBar';
import About from "./component/About";
import Product from "./component/Product";
import Product1 from "./component/Product1";
import Product2 from "./component/Product2";
import Product3 from "./component/Product3";
import Student from "./component/Student";
import ErrorPage from "./component/ErrorPage";

function App() {        //function
//    const [count,setCount]=useState(0)
//    const [name,setName]=useState("KIET");
//    const [sname,setSName]=useState("MCA");

  
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
  {/* <Msg/>
  <Display/> */}
  {/* <Languages/>
  <Counter/> */}
  {/* <ControlledName/> */}
  {/* <ControlledInfo/> */}
  {/* <Changename name={name} onUpdate={()=>setName("KIET MCA")}/>
  <Changename name={sname} onUpdate={()=>setSName("MCA KIET")}/> */}
  {/* <MyCounter/> */}
  {/* <MyCard/> */}
  //   </div>
  // );

  return(
    <>
    <NavBar/>
    <Routes>
      {/* LINKING of pages*/}
      <Route path="/" element={<HomePage/>}/>              
      <Route path="/Card" element={<MyCard/>}/>
      <Route path="/Counter" element={<MyCounter/>}/>
      <Route path="/lang" element={<Languages/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/student" element={<Student/>}>
        <Route path="/student/:name" element={<Student/>}/>
      </Route>
      <Route path="/product" element={<Product/>}>
      <Route path="product1" element={<Product1/>}/>
      <Route path="product2" element={<Product2/>}/>
      <Route path="product3" element={<Product3/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>}/>
     
    </Routes>
    </>
  );
}

export default App
