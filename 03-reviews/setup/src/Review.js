import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  const {reviews} = props
  const [index, setIndex] = useState(0)
  const {id ,name, job, image, text} = people[index]

  const prevPerson = function(){
    const newIndex = index - 1;
    const fixIndex = checkNum(newIndex)
    setIndex(fixIndex)
  }

  const nextPerson = function(){
    const newIndex = index + 1;
    const fixIndex = checkNum(newIndex)
    setIndex(fixIndex)
  }

  const checkNum = function(number){
    if(number < 0){
      return people.length - 1
    }

    if(number > people.length - 1){
      return 0
    }

    return number
  }

  const randomPerson = function(){
    let randomNumber = Math.floor(Math.random() * people.length)
    if (randomNumber === index){
      randomNumber = index + 1;
    }
    const fixIndex = checkNum(randomNumber)
    setIndex(fixIndex)
  }

  return <>
      <article className='review' key={id} className='review'>
          <div className='img-container'>
            <img className='person-img' src={image} alt='person-img' />
            <span className='quote-icon'>
            <FaQuoteRight />
            </span>
          </div>
          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
          <div className='button-container'>

            <button className='prev-btn' onClick={prevPerson}>
              <FaChevronLeft />
            </button>

            <button className='prev-btn' onClick={nextPerson}>
              <FaChevronRight />
            </button>

          </div>
            <button onClick={randomPerson} className='random-btn'>
              surprise me
            </button>
      </article>
  </>
};

export default Review;
