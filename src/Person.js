import React from 'react'


const Person = (props) => {

    return (
        <div>
        <p id={props.person.name} onClick={props.handleClick} >{props.person.name}<span> - {props.emoji}</span>{props.showTime ? <span> : {props.person.time}</span> : null}</p>
        </div>
    )
}

export default Person