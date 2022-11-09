/* eslint-disable no-lone-blocks */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import photo from './images/me.jpeg';

{/* }
const h1 = (
  <h1>Subscribe</h1>
) 

const p = (
  <p>Sign in with your email address to recive more updates</p>
)

const form = (
   <form>
      <input type="text" placeholder='First Name'/>
      <input type="text" placeholder='Last Name'/>
      <input type="text" placeholder='Email'/>
   </form>
)

const button = (
  <button type='button'>Subscribe</button>
)

const container = (
  <div className='container'>
    {h1}
    {p}
    {form}
    {button}
  </div>
)
{*/}

const myPhoto = (
  <div>
    <img src={photo} alt='myphoto'/>
  </div>
)

const Name = (
    <h1>Abdul Saboor Sohaib</h1>
)

const title = (
  <p>Junior Software developer, Afghanisatn</p>
)

const skills = (
  <p>Skills</p>
)

const buttons = (
  <div>
    <button type='button'>HTML</button>
    <button type='button'>CSS</button>
    <button type='button'>JavaScript</button>
    <button type='button'>React</button>
    <button type='button'>Redux</button>
    <button type='button'>Sass</button>
    <button type='button'>Node</button>
    <button type='button'>MongoDB</button>
    <button type='button'>Python</button>
    <button type='button'>flask</button>
    <button type='button'>Django</button>
    <button type='button'>Angular</button>
    <button type='button'>Vue</button>
    <button type='button'>TypeScript</button>
    <button type='button'>Express</button>
    <button type='button'>Ruby</button>
    <button type='button'>Ruby on rails</button>
    <button type='button'>GitHub</button>
    <button type='button'>Git</button>
    <button type='button'>AI</button>
  </div>
)

const footer = (
  <p>Joined on Aug 15, 2022</p>
)

const details = (
  <div className='mydetails'>
  {myPhoto}
  {Name}
  {title}
  {skills}
  {buttons}
  {footer}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(details,root);



