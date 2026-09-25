import React from 'react'

function  Cards(props){
  console.log(props);
  
    return (
      <div className='parent'>
        <div className="card">
            <h1>{props.user}</h1>
            <h2>{props.hobby}</h2>
            <img src={props.img} alt="my pic" />
        </div>        
      </div>  
    )
}


export default Cards
