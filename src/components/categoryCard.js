import React from 'react'
import './components.css'
import Device from '../assets/device.svg'
const CategoryCard = ({item}) => {
  return (
    <div className='category-conatainer'>
      <img src={Device} alt='device'/>
      <h1 className='category-title'>{item.name}</h1>
    </div>
  )
}

export default CategoryCard
