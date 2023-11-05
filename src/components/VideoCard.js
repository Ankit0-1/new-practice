import React from 'react'
import { Link } from 'react-router-dom';

function VideoCard({videoInfo}) {
    if(videoInfo){
    console.log(videoInfo)
    const {snippet, statistics } = videoInfo;
    const { thumbnails, title} = snippet;

  return (
    <div className='m-2 p-2 w-72 shadow'> 
    <Link to={'watch?v='+ videoInfo.id} >
        <img alt="video" src={thumbnails.medium.url} className='border rounded-sm'/></Link>
            <ul>
                <li className='font-bold p'>{title}</li>
                <li>{snippet.channelTitle}</li>
                <li>{statistics.viewCount} views</li>
                <li>{snippet.publishedAt}</li>
            </ul>
    </div>
  )
}
}

export default VideoCard