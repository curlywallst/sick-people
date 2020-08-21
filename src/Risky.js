import React from 'react'
import Person from './Person'

function Risky(props) {
    const riskyList = props.risky.map((p, i) => <Person key={i} person={p} emoji={"😎"} showTime={true} handleClick={props.handleClick} />)

    return (
        <div>
            {riskyList}
        </div>
    )
}

export default Risky
