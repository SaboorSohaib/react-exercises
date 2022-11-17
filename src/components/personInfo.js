import React from 'react';
import './style.css';
import me from '../images/me.jpeg';

const Info = ()=> (
    <div className="container1">
        <img src={me} alt='My Pic' className='pic'/>
        <h2 className='my-name'>Abdul Saboor Sohaib</h2>
        <p className='my-title'>Front End Web Develper</p>
        <p>Skills:</p>
        <div className="btns">
            <button type='button'>HTML</button>
            <button type='button'>CSS</button>
            <button type='button'>REACT</button>
            <button type='button'>GITHUB</button>
            <button type='button'>GIT</button>
            <button type='button'>Ruby</button>
            <button type='button'>GITLAB</button>
            <button type='button'>Figma</button>
            <button type='button'>Data Science</button>
            <button type='button'>Artificial Intelligence</button>
            <button type='button'>Project Management</button>
            <button type='button'>Pair Programming</button>
            <button type='button'>Time Management</button>
            <button type='button'>Problem Solver</button>
            <button type='button'>Machine Learning</button>
            <button type='button'>Cyberscurity</button>
            <button type='button'>Public Speaker</button>
            <button type='button'>Ruby on rails</button>
            <button type='button'>JAVASCRIPT</button>
            <button type='button'>Team Leader</button>
            <button type='button'>UX Design</button>
        </div>
        <footer>Joined on Aug 15 2022</footer>
    </div>
)

export default Info;