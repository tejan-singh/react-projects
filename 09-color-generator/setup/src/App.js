import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [list, setList] = useState(new Values('#222').all(10))
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setList(colors)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  const handleChange = (e) => {
    setColor(e.target.value)
  }

  return <>
    <section className='container'>
      <h3>color generator</h3>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='#f15025' onChange={handleChange} className={error?"error":null}/>
        <button type='submit' className='btn'>Submit</button>
      </form>
    </section>
    <section className='colors'>
    {list.map((eachColor, index) => {
      //pass all properties as props without extracting each
      //note: not able to access hex property from eachColor. So, we passed it as props by accessing it from object
      return <SingleColor index = {index} {...eachColor} key={index} hexCode={eachColor.hex}/>
    })}
    </section>

  </>
}

export default App
