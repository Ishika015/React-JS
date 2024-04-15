import React from 'react'

// const Languages = () => {
//     let lang=["Java","JavaScript","Kotlin","Python","C"];
//   return (
//     <div>
//       <h1>Best Programming Languages</h1>
//       <ul>
//         {/* {lang.map()=>()}; //returning multiple lines  // in return part, for while if switch loop is not used in xml, repetitive or conditional statements are not used */}
//         {lang.map((item,index)=>(
//             <li key={index}>{item}</li>
//         ))
//     }
//       </ul>
//     </div>
//   )
// }

const Languages = () => {
    let lang=[
      {id:0 ,name:"Java"},
      {id:1 ,name:"JavaScript"},
      {id:2 ,name:"Kotlin"},
      {id:3 ,name:"Python"},
      {id:4 ,name:"C"}
    ];
    var check=true;
  return (
    <div>
      <h1 className={check?('bg-warning'):'bg-success text-white'}>{(check==true)?"Best Programming Languages":"Top 5 Programming Languages"}</h1>
      <ul>
       {lang.map((item)=>(
            <li key={item.id}>{item.name}</li>
        ))
    }
      </ul>
      {/* {
        lang.
      } */}
    </div>
  )
}

export default Languages
