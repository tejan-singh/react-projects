import React from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = React.useState(data)
      return(
        <main>
        <section className='container'>
              <h3>{people.length} birthday today</h3>
              {
                people.map((person) => {
                  return <List key={person.id} image={person.image} name={person.name} age={person.age}/>
                })
              }
              <button onClick={()=>{setPeople([])}}>clear all</button>
        </section>
        </main>
      );
}

export default App;
