import React from 'react'
import Section from './Section/Section'
import Footer from './Footer/Footer'
import './style.css'

export default function Body() {
  return (
    <main>
      <div className='main'>
        <p className='first-p'>WE SET YOU APART TO GROW ONLINE</p>
        <h1>Let us help you build & brand</h1>
        <h1>your succes online.</h1>
        <div className='main-p'>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        </div>
        <button className='button-body'>WE'RE CREATIVE</button>
      </div>
      <Section/>
      <Footer/>
    </main>
  )
}
