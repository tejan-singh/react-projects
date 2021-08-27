import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [...new Set(items.map((eachItem) => eachItem.category)), 'all']

function App() {
  const [allFoodItems, setAllFoodItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const handleClick = function(category){
    if(category === 'all'){
      console.log(category)
      setAllFoodItems(items);
      return;
    }
    let selectedItems = items.filter((eachItem)=>{return (eachItem.category === category)})
    setAllFoodItems(selectedItems)
  }

  return <main>
  <section className='menu section'>

  <div className='title'>
    <h2>Our Menu</h2>
    <div className='underline'></div>
  </div>

  <Categories handleClick={handleClick} categories={categories}/>
  <Menu  allFoodItems={allFoodItems} />

  
  
  </section>
  </main>
}

export default App;
