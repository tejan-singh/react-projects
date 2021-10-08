import React from "react";
import Jobs from "./Jobs";

const Experiences = ({ data, handleClick, allData, value}) => {
  return (
    <section className="section">
      <div className="title">
        <h2>Expericence</h2>
        <div className="underline"></div>
        <Jobs allData={allData} data={data} handleClick={handleClick} value={value}/>
        <button type="button" className="btn">
          more info
        </button>
      </div>
    </section>
  );
};

export default Experiences;
