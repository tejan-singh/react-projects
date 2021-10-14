import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show:false, msg:"", type: ""})

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!input){
      setAlert({show:true, msg:"please enter value", type: "danger"})
    }
    else if(input && isEditing){
      setItems(items.map((eachItem) => {
        if (eachItem.id === editId){
          return {...eachItem, name:input}
        }

        return eachItem
      }))
      setInput('')
      setEditId(null)
      setIsEditing(false)
      setAlert({show:true, msg:"item updated", type: "success"})
    }
    else{
      const newItem = { id: new Date().getTime().toString(), name: input };
      setItems([...items, newItem]);
      setInput("");
      setAlert({show:true, msg:"item added", type: "success"})
    }
  };

  const removeItem = (id) => {
    // console.log(id)
    // will return all items except the condition specified
    let newList = items.filter((eachItem) => eachItem.id !== id);
    setItems(newList);
    setAlert({show:true, msg:"item removed", type: "success"})
  };

  const clearList = () => {
    setItems([]);
    setAlert({show:true, msg:"cleared list", type: "success"})
  };

  const editItem = (id) => {
    setIsEditing(true);
    // will return only that item which satisfy the condition
    let itemToEdit = items.find((eachItem) => {
      return eachItem.id === id;
    });
    // console.log(itemToEdit)
    // will set input field to the item that is selected for editing
    setInput(itemToEdit.name);

    setEditId(id);
  };

  const removeAlert = () => {
    setAlert({show:false, msg:"", type: ""})

  }

  return (
    <section className="section-center">
      {alert.show && <Alert {...alert} removeAlert={removeAlert}/>}
      <form className="grocery-form" onSubmit={handleSubmit}>
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="eg. eggs"
            onChange={handleChange}
            value={input}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>

      <List
        items={items}
        removeItem={removeItem}
        clearList={clearList}
        editItem={editItem}
      />
    </section>
  );
}

export default App;
