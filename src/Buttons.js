import React, { useEffect, useState } from 'react'
import firebase from './firebase';
import './Buttons.css'


function Buttons() {
  // const [Status, setStatus] = useState([]);
  // useEffect(()=>{
  //   const myitems = firebase.database().ref('Humidity');
  //   myitems.on("value", snapshot => {
  //     setStatus(Object.values(snapshot.val()));
  //   })
  // })

  const [Status2, setStatus2] = useState([]);
  useEffect(()=>{
    const myitems2 = firebase.database().ref('Temperature');
    myitems2.on("value", snapshot => {
      setStatus2(Object.values(snapshot.val()));
    })
  })

  const plus = () => {
    firebase.database().ref().update({
      LED_STATUS : 1
    });
  }

  const minus  = () => {
    firebase.database().ref().update({
      LED_STATUS : 0
    });
  }

  return (
    <div className ="Buttons">
     {/*  // <p>{Status}</p>
      // <p>{Status2}</p> */}
      <div className = "up">
        <temp />
        <button  onClick ={()=>{plus()}}>Up </button>
      </div>
      <div className="down">  
        <button  onClick ={()=>{minus()}}>Down </button>
      </div>
    </div>
  )
}

export default Buttons
