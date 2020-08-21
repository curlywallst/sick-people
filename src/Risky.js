import React from 'react'
import Person from './Person'

function Risky(props) {
    const riskyList = props.risky.map((p, i) => <Person key={i} person={p} emoji={"😎"} showTime={true} handleClick={props.handleClick} />)

    return (
        <div>
            <h2>Risky</h2>
            {riskyList}
        </div>
    )
}

export default Risky
