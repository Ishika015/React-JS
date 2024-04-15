import React from "react"

// function Msg() {
//   return (
//     <div>
//       <h1>Welcome to React JS</h1>      //rendering
//     </div>
//   )
// }
function Msg() {
    let name="React JS";
  return (
    <div>
      <h1>Welcome to {name}</h1>
    </div>
  )
}
// function Display() {
//   return (
//     <div>
//       <h1>Welcome to React JS under Display</h1>
//     </div>
//   )
// }

export default Msg
// export {Display}         //only 1 can be default

