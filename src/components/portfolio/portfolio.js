import React from 'react';
import './portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>My Portfolio</h2>
        <div className='images'>
            <a href="https://github.com/b-locatelli/Timecapsule">
                <img src="/assets/images/Timecapsule.jpg" alt="TimeCapsule" />
                  <div className='image-container'>
                        <div>TimeCapsule</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/PWA-Text-Editor">
                <img src="/assets/images/jate.PNG" alt="Text Editor" />
                  <div className='image-container'>
                        <div>JATE Text Editor</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/Social-Network-Api">
                <img src="/assets/images/social.PNG" alt="Network API" />
                  <div className='image-container'>
                        <div>Network API</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/myMeal-Generator">
                <img src="/assets/images/mymeal.PNG" alt="MealGen" />
                  <div className='image-container'>
                        <div>Meal Generator</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/Todo-Notes">
                <img src="/assets/images/notes.PNG" alt="NoteTaker" />
                  <div className='image-container'>
                        <div>NoteTaker</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/ReadME-Gen">
                <img src="/assets/images/readme.PNG" alt="ReadmeGen" />
                  <div className='image-container'>
                        <div>Readme Generator</div>
                  </div>
            </a>
        </div>
    </div>
  )
}

export default Portfolio;