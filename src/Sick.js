import React from 'react'
import Person from './Person'

const Sick = (props) => {

    const sickList = props.sick.map((p, i) => <Person key={i} person={p} emoji={"🤢"}/>)

    return (
        <div>
            <h2>Sick</h2>
            {sickList}
        </div>
    )
}

export default Sick