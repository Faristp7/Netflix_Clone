import React, { useEffect } from 'react'
import './RowPost.css'
import axios from '../axios'
import { api_key } from '../constants/constants'

export default function RowPost() {
  useEffect(() => {
    axios.get(`discover/tv?api_key=${api_key}&with_networks=213`)
    .then(({data}) => {
      console.log(data);
    }).catch(err => {
      alert(err ,'card')
    })
  })
  return (
    <div className='ml-5'>
        <h2 className='text-white'>Title</h2>
        <div className='flex p-5 overflow-x-scroll overflow-y-auto no-scrollbar'>
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
