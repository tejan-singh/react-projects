import React from "react";

const Menu = ({allFoodItems}) => {

  return (
    <div className="section-center">
      {allFoodItems.map((eachFoodItem) => {
        const { id, title, category, price, img, desc } = eachFoodItem
        return (
          <article className="menu-item" key={id}>
            <img className='photo' src={img} alt="food-item" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">{price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
