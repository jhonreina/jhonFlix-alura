import React from 'react'
import { Card } from 'react-bootstrap'

const VideoCard = () => {
  return (
      <Card className='border border-3' border='primary' style={{ width: "438px" }}>
        <iframe      
          width="432"
          height="260.85"
          src="https://www.youtube.com/embed/gB2AqUEJSIA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
    </Card>
  );
}

export default VideoCard
