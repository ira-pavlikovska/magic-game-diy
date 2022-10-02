import React, {useState} from "react";

import petImg1 from '../images/1.jpeg'
import petImg2 from '../images/2.jpeg'
import petImg3 from '../images/3.jpeg'
import petImg4 from '../images/4.jpeg'

const imgMap = {
  1: petImg1,
  2: petImg2,
  3: petImg3,
  4: petImg4
}

export default function Card({image}) {
// console.log('hi ' + JSON.stringify(images))
  let containerStyle = ''
  if (image.isMatch) {
    containerStyle = 'containerIsMatched'
  } else {
    if (image.isOpen) {
      containerStyle = 'containerIsOpen'
    } else {
      containerStyle = 'containerIsClosed'
    }
  }

   return (
     <div className={containerStyle} >
       {image.isOpen && (
         <img src={imgMap[image.picture]} />
       )}

     </div>
  )
}
