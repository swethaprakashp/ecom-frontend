import React, { useEffect, useState } from 'react'
import './home.css'
import ProductCard from '../components/productCard'
const Flashsale = () => {
    const [res, setRes] = useState([])
    useEffect(() => {
        getProducts()
    }, [])
    const getProducts = async () => {
        const res = await fetch('https://api.escuelajs.co/api/v1/products')
        const data = await res.json()
        setRes(data)
    }
    return (
        <div className='sales-view'>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='block' />
                <h1 className='title-head'>Today's</h1>
            </div>
            <h1 className='sub'>Flash Sales</h1>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                {
                    res && res.length > 0 && res.slice(0, 8).map((item) => <ProductCard item={item} />)
                }
            </div>
        </div>
    )
}

export default Flashsale;
