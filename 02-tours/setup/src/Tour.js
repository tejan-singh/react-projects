import React from 'react';

const Tour = (props) => {
  const [readMore, setReadMore] = React.useState(false)

  return <article className='single-tour'>
      <img src={props.tour.image} alt='tour-img'/>
      <footer>
        <div className='tour-info'>
          <h4>{props.tour.name}</h4>
          <h4>{props.tour.price}</h4>
        </div>
        <p>
        {readMore ? props.tour.info : `${props.tour.info.substring(0,200)}`}
        <button onClick = {() => {setReadMore(!readMore)} } >{readMore ? 'Showless' : 'Readmore'}</button>
        </p>
        <button className="delete-btn" onClick = {() => {props.removeTour(props.tour.id)}}>not interested</button>
      </footer>
    </article>
};

export default Tour;
