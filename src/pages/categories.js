import React, { useEffect, useState } from 'react'
import './home.css'
import CategoryCard from '../components/categoryCard'
const Categories = () => {
    const [res, setRes] = useState([])
    useEffect(() => {
        getCategory()
    }, [])
    const getCategory = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories')
        const data = await res.json()
        setRes(data)
    }
  return (
    <div className='sales-view'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='block' />
                <h1 className='title-head'>Categories</h1>
            </div>
            <h1 className='sub'>Browse by categories </h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    res && res.length > 0 && res.slice(0, 8).map((item) => <CategoryCard item={item} />)
                }
            </div>
        </div>
  )
}

export default Categories;
