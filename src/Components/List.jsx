import React from 'react'

export default function List(props) {

    return (
        <div>
            <ul>
                {props.data.map((element,index)=>{
                    return <li key={index}> {element}</li>
                })}
            </ul>
        </div>
    )
}
