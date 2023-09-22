import { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import './styles.module.css'

function Index() {

  
  return (
    <>
      <div className='video-container'>
        
        <ReactPlayer url= "https://www.youtube.com/shorts/lEvrGkwDH0Q?feature=share"  
         width="375px"
        height="675px" />
        
      </div>
    </>
  )
}

export default Index