import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, clearList, editItem}) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {items.map((eachItem, index) => {
          return (
            <article className="grocery-item" key={index}>
              <p className="title">{eachItem.name}</p>
              <div className="btn-container">
                <button type="button" className="edit-btn" onClick={()=>{editItem(eachItem.id)}}>
                  <FaEdit/>
                </button>
                <button type="button" className="delete-btn" onClick={()=>{removeItem(eachItem.id)}}>
                <FaTrash/>
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {items.length !== 0 && <button className="clear-btn" onClick={clearList}>clear items</button>}
    </div>
  );
};

export default List;
