import React from 'react'
import { Link } from 'react-router-dom'

import './productlist.css'

const ProductList = () => {
  return (
    <div className='productlist-container'>
        <div className='header'>
            <h2>Product List</h2>
            <div className='button-container'>
                <Link to='/addproduct' style={{textDecoration:'none'}}>
                    <button className='add'>ADD</button>
                </Link>
                <button className='mass-delete'>MASS DELETE</button>
            </div>
        </div>
        <hr />
        <div className='body'>
            Product list here
        </div>
    </div>
  )
}

export default ProductList