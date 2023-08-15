import React from 'react';
import './portfolio.css';
import Timecapsule from '../../assets/images/Timecapsule.jpg'
import Jate from '../../assets/images/jate.PNG'
import Social from '../../assets/images/social.PNG'
import Mymeal from '../../assets/images/mymeal.PNG'
import Notes from '../../assets/images/notes.PNG'
import Readme from '../../assets/images/readme.PNG'

function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>My Portfolio</h2>
        <div className='images'>
            <a href="https://github.com/b-locatelli/Timecapsule">
                <img src= {Timecapsule} alt="TimeCapsule" />
                  <div className='image-container'>
                        <div>TimeCapsule</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/PWA-Text-Editor">
                <img src= {Jate} alt="Text Editor" />
                  <div className='image-container'>
                        <div>JATE Text Editor</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/Social-Network-Api">
                <img src= {Social} alt="Network API" />
                  <div className='image-container'>
                        <div>Network API</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/myMeal-Generator">
                <img src= {Mymeal} alt="MealGen" />
                  <div className='image-container'>
                        <div>Meal Generator</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/Todo-Notes">
                <img src= {Notes} alt="NoteTaker" />
                  <div className='image-container'>
                        <div>NoteTaker</div>
                  </div>
            </a>
            <a href="https://github.com/b-locatelli/ReadME-Gen">
                <img src= {Readme} alt="ReadmeGen" />
                  <div className='image-container'>
                        <div>Readme Generator</div>
                  </div>
            </a>
        </div>
    </div>
  )
}

export default Portfolio;