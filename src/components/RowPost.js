import React from 'react'
import './RowPost.css'

export default function RowPost() {
  return (
    <div className='ml-5'>
        <h2 className='text-white'>Title</h2>
        <div className='flex p-5 overflow-x-scroll'>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
            <img src="/img/cardImage.jpg" alt="card" className='max-h-60 mr-3'/>
        </div>
    </div>
  )
}
