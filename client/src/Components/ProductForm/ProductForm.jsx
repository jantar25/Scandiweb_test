import React from 'react'

import './productform.css'

const ProductForm = ({notification,handleChange,inputs}) => {
    const { sku,name,price,productType,size,weight,height,width,length } = inputs;
  return (
    <div className='body'>
    <form id='product_form'>
      {notification && <div className='notification'>{notification}</div>}
      <div className='input-container'>
        <label>SKU</label>
        <input type='text' id='sku' value={sku} onChange={handleChange} />
      </div>
      <div className='input-container'>
        <label>Name</label>
        <input type='text' id='name' value={name} onChange={handleChange} />
      </div>
      <div className='input-container'>
        <label>Price($)</label>
        <input type='number' id='price' value={price} onChange={handleChange} />
      </div>
      <div className='input-container'>
        <label>Type switcher</label>
        <select id='productType' value={productType} onChange={handleChange}>
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
          <input type='number' id='size' value={size} onChange={handleChange} />
        </div>
        <p>“Please, provide size”</p>
      </div>
      }
      {productType === 'book' &&
      <div>
        <div className='input-container'>
          <label>Weight(Kg)</label>
          <input type='number' id='weight' value={weight} onChange={handleChange} />
        </div>
        <p>“Please, provide weight”</p>
      </div>
      }
      {productType === 'furniture' &&
      <div>
        <div className='input-container'>
          <label>Height</label>
          <input type='number' id='height' value={height} onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label>Width</label>
          <input type='number' id='width' value={width} onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label>Length</label>
          <input type='number' id='length' value={length} onChange={handleChange} />
        </div>
        <p>“Please, provide dimensions”</p>
      </div>
      }
    </form>
</div>
  )
}

export default ProductForm