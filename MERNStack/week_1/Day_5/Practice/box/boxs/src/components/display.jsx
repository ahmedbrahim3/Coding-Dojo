import React from 'react'

const Display = ({colors}) => {

  return (
    <div className='d'>
    
      {colors.map((c,index)=>{
        return(
       <div key={index} style={{ backgroundColor: c, width: '150px', height: '150px' }}>
       
       </div>
      )
      })}
    </div>
  )
}

export default Display
