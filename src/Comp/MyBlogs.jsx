import React from 'react'
import './MyBlogs.css'

const MyBlogs = () => {
  return (
    <div>
    <div className='myblogsCard'>
        <h4>The Legacy of Naruto</h4>
        <p style={{marginTop:'15px', marginBottom:'12px', fontSize:'14px'}}>Published on 03/10/2024</p>
        <p style={{fontSize:'18px'}}>Naruto, one of the most beloved anime series, tells the inspiring story of Naruto Uzumaki, a young ninja striving to become the strongest warrior and leader of his village — the Hokage.But beyond the epic battles...</p>
        <button className='button' onClick={() => window.open('https://medium.com/@nitinkapoor146/the-legacy-of-naruto-a-story-of-dreams-bonds-and-ninjas-328964f4868f')}>Read more</button>
        </div>
        <div className='myblogsCard'>
        <h4>Discovering Preact</h4>
        <p style={{marginTop:'15px', marginBottom:'12px', fontSize:'14px'}}>Published on 04/10/2024</p>
        <p style={{fontSize:'18px'}}>Preact is a lightweight alternative to React, weighing in at just 3KB, which makes it an excellent choice for performance-focused applications. Here’s why it stands out: 1. Small Size: Its tiny footprint means...</p>
        <button className='button' onClick={() => window.open('https://medium.com/@nitinkapoor146/discovering-preact-the-hidden-gem-of-frontend-development-3c5a88f8014c')}>Read more</button>
    </div>
    </div>
  )
}

export default MyBlogs
