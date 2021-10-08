import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

import Experiences from './Components/Experiences'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  // const [experience, setExperience] = useState({})
  const [value, setValue] = useState(0)

  useEffect(()=>{
    getData()
  },[])

  const getData = async function(){
    let response = await fetch(url)
    // console.log(response)
    let data = await response.json()
    setData(data)
    console.log(data)
    setLoading(false)
  }

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  const handleClick = (index) => {
    // setExperience(data[index])
    setValue(index)
  }

   
  
  return <Experiences allData = {data} data = {data[value]} handleClick={handleClick} value={value}/>
}

export default App
