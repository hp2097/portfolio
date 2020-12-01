import React from 'react'



export default function Card(props) {

    

    return (
        <div className="card">
        <iframe className="card-img-top" title={props.title} width="560" height="315" src={props.image} frameBorder={1}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.details}.</p>
            <h5 className="card-title">Technologies</h5>
            <div className="list-tech">
            <ul>
                {props.tech.map((element,index)=>{
                    return <li key={index}> {element} </li>
                })}
            </ul>
            </div>
            </div>
        </div>
    )
}
