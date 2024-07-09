import React from 'react'
import DropDown from '../assets/dropdown.svg';
import Search from '../assets/search.svg';
import Heart from '../assets/heart.svg';
import Cart from '../assets/cart.svg';

import '../App.css'
function Header() {
    return (
        <div className='header'>
            <div className='App-header'>
                <div>
                    <h1 className='header-title'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        <span> &nbsp; <u>ShopNow</u>
                        </span>
                    </h1>
                </div>
                <div className='lang-select'>
                    <h1 className='header-title'>English</h1>
                    <img src={DropDown} alt='select' />
                </div>
            </div>
            <div className='links'>
                <h1 className='title'>Royal Class</h1>
                <>
                <h1 className='sub-title'>Home</h1>
                <h1 className='sub-title'>Contact</h1>
                <h1 className='sub-title'>About</h1>
                <h1 className='sub-title'>Sign Up</h1>
                </>
                <div className='search'>
                    <input className='search-input' placeholder='What are you looking for?' type='text' />
                    <img src={Search} alt="search" />
                </div>
                <div style={{display:'flex', flexDirection:'row'}}>
                <img src={Heart} alt="heart" style={{marginRight :'15px'}} />
                <img src={Cart} alt="cart" />
                </div>
            </div>
        
        </div>
    )
}

export default Header;
