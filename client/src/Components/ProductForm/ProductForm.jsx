import React from 'react'

import './productform.css'

const ProductForm = ({notification,handleNumberChange,handleTextChange,inputs}) => {
    const { sku,name,price,productType,size,weight,height,width,length } = inputs;
  return (
    <div className='container'>
    <form id='product_form'>
      {notification && <div className='notification'>{notification}</div>}
      <div className='input-container'>
        <label>SKU</label>
        <input type='text' id='sku' value={sku} onChange={handleTextChange} />
      </div>
      <div className='input-container'>
        <label>Name</label>
        <input type='text' id='name' value={name} onChange={handleTextChange} />
      </div>
      <div className='input-container'>
        <label>Price($)</label>
        <input type='number' id='price' min='0' value={price} onChange={handleNumberChange} />
      </div>
      <div className='input-container'>
        <label>Type switcher</label>
        <select id='productType' value={productType} onChange={handleTextChange}>
          <option value=''>--Type switcher--</option>
          <option value='dvd' id='DVD'>DVD</option>
          <option value='book' id='Book'>Book </option>
          <option value='furniture' id='Furniture'>Furniture </option>
        </select>
      </div>
      {productType === 'dvd' &&
      <div>
        <div className='input-container'>
          <label>Size(MB)</label>
          <input type='number' id='size' min='0' value={size} onChange={handleNumberChange} />
        </div>
        <p>“Please, provide size”</p>
      </div>
      }
      {productType === 'book' &&
      <div>
        <div className='input-container'>
          <label>Weight(Kg)</label>
          <input type='number' id='weight' min='0' value={weight} onChange={handleNumberChange} />
        </div>
        <p>“Please, provide weight”</p>
      </div>
      }
      {productType === 'furniture' &&
      <div>
        <div className='input-container'>
          <label>Height</label>
          <input type='number' id='height' min='0' value={height} onChange={handleNumberChange} />
        </div>
        <div className='input-container'>
          <label>Width</label>
          <input type='number' id='width' min='0' value={width} onChange={handleNumberChange} />
        </div>
        <div className='input-container'>
          <label>Length</label>
          <input type='number' id='length' min='0' value={length} onChange={handleNumberChange} />
        </div>
        <p>“Please, provide dimensions”</p>
      </div>
      }
    </form>
</div>
  )
}

export default ProductForm