import React from 'react';
import './App.css';
import PDF from './components/Resume/AbrahamHall_DEVresumeL.pdf'
import { PopoverName } from './components/PopoverName/PopoverName'

function App() {
  return (
    <div className='my-interim-portfolio'>
      <div className='intro-name'>
        <PopoverName />
      </div>

      <h3 className='job-title'>A front end developer-designer</h3>
      <p className='under-contruction'>Please pardon the construction while my magical fairies (fingers) are making my new site pretty for you.</p>
      <div className='fairy-dust'></div>

      <div className='projects-box'>
        <h4 className='project-title'>Projects</h4>
        <div><a href='http://ahtimepiece.netlify.com/' target='_blank'>Project 1</a></div>
        <div><a href='http://ahtictactoe.netlify.com/' target='_blank'>Project 2</a></div>
        <div><a href='http://eatingrightforyourbloodtype.netlify.com/' target='_blank'>Project 3</a></div>
      </div>
      
      <h4><a href={PDF} target='_blank'>CV/ Resume</a></h4>
      
      

      { /*<img />
      <div className='astro-glyphs'></div>
      <div className='intro-title'></div>
      <div></div>  */}    
    </div>
  );
}

export default App;

