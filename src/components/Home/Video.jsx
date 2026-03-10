import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
      <video autoPlay loop muted className='w-full h-full object-cover'
      src="/videos/video.mp4">
      </video>
    </div>
  )
}

export default Video
