import React,{useEffect, useState} from 'react'
import MyButton from './MyButton'
import {API_URL} from '../utils/const'
import VideoCard from './VideoCard';

const buttonName = ['All', 'Gaming', 'Trending', 'Cricket', 'Football']


function MainBody() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, [])
  const getVideos = async() =>{
    const data = await fetch(API_URL);
    const json = await data.json()
    console.log(data)
    console.log(json)
    setVideos(json?.items)
  }
  return (
    <div>
    <div
      className='flex'
    >{
        buttonName.map((item, index) => <MyButton key={index} name={item} />)
      }
      </div>
      <div className='flex flex-wrap'>
        {
          videos.map((video) => <VideoCard key={video.id} videoInfo={video} />)
        }
      </div>
    </div>
  )
}

export default MainBody