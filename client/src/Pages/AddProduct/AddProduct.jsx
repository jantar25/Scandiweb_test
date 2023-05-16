import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import './addproduct.css'

const AddProduct = () => {
  const [showFields,setShowFields] = useState('')
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
            <form>
              <div>
                <label>SKU</label>
                <input type='text' id='sku' />
              </div>
              <div>
                <label>Name</label>
                <input type='text' id='name' />
              </div>
              <div>
                <label>Price($)</label>
                <input type='number' id='price' />
              </div>
              <div>
                <label>Type switcher</label>
                <select id='productType' onChange={(e)=>setShowFields(e.target.value)}>
                  <option value='' disabled>--Type switcher--</option>
                  <option value='dvd'>DVD-disc</option>
                  <option value='book'>Book </option>
                  <option value='furniture'>Furniture </option>
                </select>
              </div>
              {showFields === 'dvd' &&
              <div>
                <label>Size(MB)</label>
                <input type='number' id='size' />
              </div>
              }
              {showFields === 'book' &&
              <div>
                <label>Weight(Kg)</label>
                <input type='number' id='weight' />
              </div>
              }
              {showFields === 'furniture' &&
              <div>
                <div>
                  <label>Height</label>
                  <input type='number' id='height' />
                </div>
                <div>
                  <label>Width</label>
                  <input type='number' id='width ' />
                </div>
                <div>
                  <label>Length</label>
                  <input type='number' id='length ' />
                </div>
              </div>
              }
            </form>
        </div>
    </div>
  )
}

export default AddProduct