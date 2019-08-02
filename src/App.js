import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h2 className='intro-sentence'>Hi! I'm <u className='my-name'>Abraham Hall</u></h2>
      <span className='link-box bubble'>
        <div className='git-link'><a>Git</a></div>
        <div className='linkedIn-link'><a>LinkedIn</a></div>
      </span>
      <h3 className='job-title'>A front end developer-designer</h3>
      <p className='under-contruction'>Please pardon the construction while my magical fairies (fingers) are making my new site pretty for you.</p>
      <div className='fairy-dust'></div>


      <h4 className='project-title'>Projects</h4>
      <div><a>Project 1</a></div>
      <div><a>Project 2</a></div>
      <div><a>Project 3</a></div>
      
      
       
      

      { /*<img />
      <div className='astro-glyphs'></div>
      <div className='intro-title'></div>
      <div></div>  */}    
    </div>
  );
}

export default App;

