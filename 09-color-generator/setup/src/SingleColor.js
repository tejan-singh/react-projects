import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexCode}) => {
  //this will convert rgb arrary values to a integer seperated by a comma
  const bcg = rgb.join(',')
  // console.log(bcg)

  //another way to pass hexCode is to convert array of rgb value to hex using a rgbToHex function
  // to generate array of hexCode we pass rgb array with spread operator. This will generate an array of converted hexCode
  // const hexCode = rgbToHex(...rgb)

  // set background value of each color according to the rgb value got from bcg
  return (
    <article className='color' style={{backgroundColor: `rgb(${bcg})`}}>
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexCode}</p>
  </article>
  )
}

export default SingleColor
