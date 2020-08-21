import React from 'react'
import Person from './Person'

const Safe = (props) => {

    const safeList = props.safe.map((p, i) => <Person key={i} person={p} emoji={"😷"}/>)

    return (
        <div>
            <h2>Safe</h2>
            {safeList}
        </div>
    )
}

export default Safe