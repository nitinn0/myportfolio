import React from 'react'
import './MyBlogs.css'

const MyBlogs = () => {
  return (
    <div className='myblogsCard'>
        <h4>The Legacy of Naruto</h4>
        <p style={{marginTop:'15px', marginBottom:'12px', fontSize:'14px'}}>Published on 03/10/2024</p>
        <p style={{fontSize:'18px'}}>Naruto, one of the most beloved anime series, tells the inspiring story of Naruto Uzumaki, a young ninja striving to become the strongest warrior and leader of his village — the Hokage.</p>
        <button className='button'>Read more</button>
    </div>
  )
}

export default MyBlogs
