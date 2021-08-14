import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = (props) => {
  const { title, info } = props.question;
  const [description, setDescription] = useState("");
  const [showDesc, setShowDesc] = useState(false);

  const handleClick = function () {
    setDescription(info);
    setShowDesc(!showDesc);
  };

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={handleClick}>
          {showDesc ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showDesc ? description : ""}</p>
    </article>
  );
};

export default Question;
