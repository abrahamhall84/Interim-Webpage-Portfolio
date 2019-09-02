import React from 'react';
import './App.css';
import PDF from './components/Resume/AbrahamHall_DEVresumeL.pdf'
import { IntroTitle } from './components/IntroTitle/IntroTitle'
import { Projects } from './components/Projects/Projects'

function App() {
  return (
    <div className='my-interim-portfolio'>
      <IntroTitle />
      <h3 className='job-title'>A front end developer-designer</h3>
      <p className='under-contruction'>Please pardon the construction while my magical fairies (fingers) are making my new site pretty for you.</p>
      
      <Projects />
      
      <h4><a href={PDF} target='_blank' rel='noopener noreferrer'>CV/ Resume</a></h4>
      <div className='about-me'>
        <p>Currently looking for positions as frontend/ fullstack web developer &amp; designer. Hire me. You'll love me to work for you.</p>  
      </div>         
    </div>
  );
}

export default App;

