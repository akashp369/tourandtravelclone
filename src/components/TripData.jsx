import React from 'react'
import './TripStyles.css'
export default function TripData(props) {
  return (
    <div className='t-card'>
        <div className="t-image">
            <img src={props.image} alt="Image" />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}
