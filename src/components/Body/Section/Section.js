import React, { useState } from 'react'
import './style.css'

export default function Section() {
  
  const text1 = [{
    text1: "texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1",
    text2: "texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 ",
    text3: "texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1 texto 1"
  }]

  const text2 = [{
    text1: "texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2",
    text2: "texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2",
    text3: "texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2 texto 2"
  }]

  const text3 = [{
    text1: "texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3",
    text2: "texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3",
    text3: "texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3 texto 3"
  }]

  const text4 = [{
    text1: "texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4",
    text2: "texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4",
    text3: "texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4 texto 4"
  }]

  const [text, setText] = useState(text1)
  const [imgColor, setImgColor] = useState('')

  return (
    <section>
        <h2 className='h2-section'>We Are Wander</h2>
        <div className='card-imgs'>
            <div>
              <button className='button-card' onClick={() => {setText(text1)}}>
                <img src='https://cdn-icons-png.flaticon.com/512/1579/1579831.png' alt='sera q deu?' title='deu firme'/>
                <p>Lorem Ipsum</p>
              </button>
            </div>
            <div>
              <button className='button-card' onClick={() => {setText(text2)}}>
                <img src='https://cdn-icons-png.flaticon.com/512/747/747423.png' alt='bitch' title='tem ave?'/>
                <p>Lorem Ipsum</p>
              </button>
            </div>
            <div>
              <button className='button-card' onClick={() => {setText(text3)}}>
                <img src='https://i.pinimg.com/originals/30/da/5c/30da5cbdf89125d8178f13bb4ffc890d.png' alt='voar' title='num'/>
                <p>Lorem Ipsum</p>
              </button>
            </div>
            <div>
              <button className='button-card' onClick={() => {setText(text4)}}>
                <img src='https://i.pinimg.com/originals/f1/1c/58/f11c585e2a4f3235de9270e0a2a37016.png' alt='ave' title='tem'/>
                <p>Lorem Ipsum</p>
              </button>
            </div>
        </div>
        <div>
          {text.map((p, index) => {
            return(
              <div id={index} key={index} className='text-img'>
                <p> {p.text1} </p>
                <p> {p.text2} </p>
                <p> {p.text3} </p>
              </div>
            )
          })}
        </div>
    </section>
    
  )
}
