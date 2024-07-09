import React from 'react'
import './components.css'
const ProductCard = ({ item }) => {
    return (
        <div className='card-container'>
            <img src={item.category.image} alt='product-image' height={'80vh'} />
            <h1 className='product-name'>{item.title}</h1>
            <h2 className='product-price'>${item.price}</h2>
        </div>
    )
}

export default ProductCard
