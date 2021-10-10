import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(typeof(count)) // count is string value

    let amount = parseInt(count) // convert string value to integer
    // console.log(typeof(amount)) // amount is integer value

    if(count <= 0){
      amount = 1
    }

    if(count > 8){
      amount = 8
    }

    let requestedPara = data.slice(0, amount) // will copy array from start to given length
    setText(requestedPara)

  };

  const handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={handleChange}
        />
        <button type="submit" className="btn">
          Generate
        </button>

        <article className="lorem-text">
          {text.map((item, index) => {
            return (<p key={index}>{item}</p>)
          })}
        </article>
      </form>
    </section>
  );
}

export default App;
