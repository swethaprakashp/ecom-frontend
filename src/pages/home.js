import React from 'react'
import './home.css'
import Arrow from '../assets/arrow.svg';
import Img from '../assets/img.svg';
const Home = () => {
  return (
    <div className='content-section'>
    <div className='main'>
      <ul>
        <li className='list-item'>Women's fashion
        <span><img src={Arrow} alt='arrow'/></span>
        </li>
        <li className='list-item'>Men's fashion
        <span><img src={Arrow} alt='arrow'/></span>
        </li>
        <li className='list-item'>Electronics</li>
        <li className='list-item'>Home & Lifestyle</li>
        <li className='list-item'>Medicine</li>
        <li className='list-item'>Sports & Outdoor</li>
        <li className='list-item'>Baby's & Toys</li>
        <li className='list-item'>Groceries & Pets</li>
        <li className='list-item'>Health & Beauty</li>
      </ul>
    </div>
    <div className='img-part'>
        <img src={Img} alt='img' />
    </div>
    </div>
  )
}

export default Home;
