import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeSideBar } from '../utils/slice/appSlice'
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
    const dispatch = useDispatch();
    const [searchParams ]= useSearchParams()
    const search = searchParams.get("v")
    console.log(search);
    
    useEffect(() => {

        console.log('first')
        dispatch(closeSideBar());
    }, [])

  return (
    <div className='mx-20 m-2 p-2'>
        <iframe 
        width="930" 
        height="523" 
        src={"https://www.youtube.com/embed/"+search} 
        title="Truth Or Dare with DM Abhilash | Aspirants Season 2 streaming now on Amazon Prime Video" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
        className='rounded-border-lg'
        ></iframe>
    </div>
  )
}

export default WatchPage