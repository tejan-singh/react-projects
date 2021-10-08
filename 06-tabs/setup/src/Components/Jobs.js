import React from "react";
import JobInfo from "./JobInfo";
const Jobs = ({ data, handleClick, allData, value }) => {
  return (
    <div className="jobs-center">
      <div className="btn-container">
        {allData.map((experience, index) => {
            //if index of button matches the current state value then add 'active-btn' class
          return <button className={`job-btn ${index === value && 'active-btn'}`} key={index} onClick ={()=>{handleClick(index)}} >{experience.company}</button>;
        })}
      </div>
      <JobInfo data = {data}/>
    </div>
  );
};

export default Jobs;
