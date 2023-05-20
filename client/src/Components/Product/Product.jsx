import React from 'react'

import './product.css'

const Product = ({product,handleCheckBox}) => {
  return (
    <div className='product-container'>
        <input 
          type='checkbox' 
          className='.delete-checkbox' 
          value={product.SKU} 
          onChange={handleCheckBox}/>
        <div className='product-card'>
            <p>{product.SKU}</p>
            <p>{product.name}</p>
            <span>{product.price} $</span>
            {product.productType === 'furniture' ?
            <p>Dimensions: {product.dimensions}</p> :
            product.productType === 'book' ?
            <p>Weight: {product.weight} KGs</p>
            : <p>Size: {product.size} MB</p>
        }
        </div>
    </div>
  )
}

export default Product