import React from 'react'

const Pagination = (props) => {
  
    const items = props.items.map((item,index)=> {
        return <li key={item.id} > {item.title} </li>
    })
    //Con eso transforma el array de objetos a un array de list

    return (
        <div>
               {/* <h1>Page: {props.currentPage}</h1> */}

               <button onClick={props.prevHandler}>← ←</button>
               <button onClick={props.nextHandler}>→ →</button>

                <h2>Countries: </h2>

                <ul>
                    {items}
                </ul>

        </div>
          
  )
}

export default Pagination
