import React from 'react'

import './product.css'

const Product = ({product,handleCheckBox}) => {
  return (
    <div className='product-container'>
        <input 
          type='checkbox' 
          className='delete-checkbox' 
          value={product.SKU} 
          onChange={handleCheckBox}/>
        <div className='product-card'>
            <span>{product.SKU}</span>
            <span>{product.name}</span>
            <span>{product.price} $</span>
            {product.productType === 'furniture' ?
            <span>Dimensions: {product.dimensions}</span> :
            product.productType === 'book' ?
            <span>Weight: {product.weight} KG</span>
            : <span>Size: {product.size} MB</span>
        }
        </div>
    </div>
  )
}

export default Product