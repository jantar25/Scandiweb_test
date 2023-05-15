import React from 'react'

import './product.css'

const Product = ({product}) => {
  return (
    <div className='product-container'>
        <input type='checkbox' className='.delete-checkbox'/>
        <div className='product-card'>
            <span>{product.SKU}</span>
            <span>{product.name}</span>
            <span>{product.price} $</span>
            {product.type === 'Furniture' ?
            <span>Dimention: {product.dimention}</span> :
            product.type === 'Book' ?
            <span>Weight: {product.weight}</span>
            : <span>Size: {product.size}</span>
        }
        </div>
    </div>
  )
}

export default Product