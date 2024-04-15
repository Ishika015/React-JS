import React from 'react'
import Info from './Info';

const ControlledInfo = () => {
    let lang=["Java","JavaScript","Kotlin","Python","C"];
  return (
    <div>
           {/* it is passed as a property  */}
           <Info lang={lang} /> 
    </div>
  )
}

export default ControlledInfo
