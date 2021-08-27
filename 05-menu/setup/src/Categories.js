import React from 'react';

const Categories = ({handleClick , categories}) => {
 
  return <div className='btn-container'>
    {
      categories.map((category) => {
        return(
          <button type="button" className="filter-btn" onClick={()=>{handleClick(category)}}>{category}</button>
        )
      })
    }
    

  </div>;
};

export default Categories;
