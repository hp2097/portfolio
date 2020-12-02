import React from 'react'

export default function Link(props) {
    return (
        <a href={props.goto}  target="_blank" className={props.className}>
            {props.children?props.children:""}
        </a>
    )
}
