import React from 'react';
import './portfolio.css';

function Portfolio() {
  return (
    <div className='portfolio'>
        <h2>My Portfolio</h2>
        <div className='images'>
            <a href="https://github.com/b-locatelli/Timecapsule">
                <img src="/assets/images/Timecapsule.jpg" alt="TimeCapsule" />
            </a>
            <a href="https://github.com/b-locatelli/PWA-Text-Editor">
                <img src="/assets/images/jate.PNG" alt="Text Editor" />
            </a>
            <a href="https://github.com/b-locatelli/Social-Network-Api">
                <img src="/assets/images/social.PNG" alt="Network API" />
            </a>
            <a href="https://github.com/b-locatelli/myMeal-Generator">
                <img src="/assets/images/mymeal.PNG" alt="MealGen" />
            </a>
            <a href="https://github.com/b-locatelli/Todo-Notes">
                <img src="/assets/images/notes.PNG" alt="NoteTaker" />
            </a>
            <a href="https://github.com/b-locatelli/ReadME-Gen">
                <img src="/assets/images/readme.PNG" alt="ReadmeGen" />
            </a>
        </div>
    </div>
  )
}

export default Portfolio;