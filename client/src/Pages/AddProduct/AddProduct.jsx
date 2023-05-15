import React from 'react'
import { Link } from 'react-router-dom'

import './addproduct.css'

const AddProduct = () => {
  return (
    <div className='addProduct-container'>
        <div className='header'>
            <h2>Product Add</h2>
            <div className='button-container'>
                <button className='save'>Save</button>
                <Link to='/' style={{textDecoration:'none'}}>
                  <button className='cancel'>Cancel</button>
                </Link>
            </div>
        </div>
        <hr />
        <div className='body'>
            product add here
        </div>
    </div>
  )
}

export default AddProduct