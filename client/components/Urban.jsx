import React from 'react'

const Urban = (props) => {
  return (
    <div>
  <h2><b><i>{props.urbanOutput[0].word}</i></b></h2>
     
     {props.urbanOutput.map((item, id) => {
    return (   <div key ={id}>
     <h3>Definition</h3>
 
  <p>
   {item.definition}
   </p>
   <br/>
   <h3>Example</h3>
   <p>
   {item.example}
   </p>
   </div>)
     })}
   
    </div>
  )
}

export default Urban

