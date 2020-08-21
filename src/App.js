import React, {useState, useEffect} from 'react';

import './App.css';
import Risky from './Risky';
import Sick from './Sick'
import Safe from './Safe'

function App() {
  const [int, setInt] = useState()
  const [people, setPeople] = useState([
      { id: 1, name: "Chris", status: "risky", time: 5},
      { id: 2, name: "Ryan", status: "risky", time: 5 },
      { id: 3, name: "Jaeson", status: "sick", time: 5 },
      { id: 4, name: "Matt", status: "safe", time: 5 }
    ])
  const [riskyPeople, setRisky] = useState([])
  const [safePeople, setSafe] = useState([])
  const [sickPeople, setSick] = useState([])

  const startTimer = () => {
      let i = setInterval(() => {
        console.log("In here", people)
        updateCounter()}, 1000)
      setInt(i)
  }

  useEffect(() => {
    if (people.filter( (p) => p.status === "risky").length > 0){
      startTimer()
    } 

    return () => {
      console.log("the end")
      clearInterval(int)
    }
  }, [people])

  useEffect(()=> {
    console.log("The people", people)
    setGroups()
  }, [people])
  
  const updateCounter = () => {
    const peeps = people.map(p => {
      if (p.status === "risky" && p.time > 0) {
        return {...p, time: p.time - 1} 
      } else if (p.status === "risky" && p.time <= 0) {
        return {...p, time: 0, status: "sick"} 
      } else {
        return p
      }
    })
    setPeople(peeps)
  }
 
  const setGroups = () => {
    const risky = people.filter( (p) => p.status === "risky")
    setRisky(risky)
    const safe = people.filter( (p) => p.status === "safe")
    setSafe(safe)
    const sick = people.filter( (p) => p.status === "sick")
    setSick(sick)
  }

  useEffect( setGroups, [riskyPeople.length])

  const handleClick = (event) => {
    const peeps = people
    peeps.find((p, i) => p.name === event.target.id).status = "safe"
    setPeople([...peeps])
  }

  return (
    <div className="App">
        <h2>Risky</h2>
        <Risky risky={riskyPeople} handleClick={handleClick} />       
        <h2>Safe</h2>
        <Safe safe={safePeople} />
        <h2>Sick</h2>
        <Sick sick={sickPeople} />
    </div>
  );
}

export default App;
