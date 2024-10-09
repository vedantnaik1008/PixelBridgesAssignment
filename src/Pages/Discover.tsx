import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import Guardian from '../components/Guardian'
import Heritage from '../components/Heritage'

const Discover = () => {
    const {id} = useParams()
    console.log(id);
    
  return (
      <div className='bg-white w-full h-full'>
          {window.location.pathname === '/discover/0' ? (
              <Guardian />
          ) : (
              <Heritage />
          )}
      </div>
  );
}

export default Discover
