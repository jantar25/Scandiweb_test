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
            <div>{product.SKU}</div>
            <div>{product.name}</div>
            <div>{product.price} $</div>
            {product.productType === 'furniture' ?
            <div>Dimensions: {product.dimensions}</div> :
            product.productType === 'book' ?
            <div>Weight: {product.weight} KGs</div>
            : <div>Size: {product.size} MBs</div>
        }
        </div>
    </div>
  )
}

export default Product