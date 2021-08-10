import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tours, setTours] = useState([])

  useEffect(()=>{
    getData();
  },[])

  const getData = async function(){
    const response = await fetch(url);
    if(response.status){
      const data = await response.json();
      setTours(data)
      setIsLoading(false);
    }
    else{
      setIsLoading(true);
      setIsError(true);
    }
  }

  const removeTour = function(id){
    const newTours = tours.filter((tour) => {return (tour.id !== id)});
    setTours(newTours)
  }


  if(isLoading){
    return <>
      <Loading />
    </>
  }

  if(isError){
    return <>
      <h2>Error 404</h2>
    </>
  }

  if(tours.length === 0){
    return <main>
      <div className='title'>
        <h2>no tours left</h2>
        <button className="btn" onClick={getData}>Refresh</button>
      </div>
    </main>
  }

  return <>
    {/* passing removeTour function as props */}
    <Tours tours = {tours} removeTour = {removeTour} getData = {getData}/>
  </>
}

export default App;
