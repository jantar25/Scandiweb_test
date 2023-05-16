import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import './addproduct.css'

const AddProduct = () => {
  const [notification,setNotification] = useState(null)
  const [inputs,setInputs] = useState({
    sku: '',
    name: '',
    price: '',
    productType:'',
    size: '',
    weight: '',
    height: '',
    width: '',
    length: '',
  })

  const handleChange = (e) => {
    setInputs({...inputs,[e.target.id]:e.target.value})
  }

  const emptyForm = () => {
    setInputs({
      sku: '',
      name: '',
      price: '',
      productType:'',
      size: '',
      weight: '',
      height: '',
      width: '',
      length: '',
    })
  }

  const { sku,name,price,productType,size,weight,height,width,length } = inputs;

  const handleSubmit = () => {
    switch (productType) {
      case "dvd":
          if(!sku | !name | !price | !productType | !size) {
            setNotification('“Please, submit required data”')
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          } else {
            const product = { sku,name,price,productType,size }
            console.log(product)
            emptyForm()
          }
        break;
      case "book":
        if(!sku | !name | !price | !productType | !weight) {
          setNotification('“Please, submit required data”')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        } else {
          const product = { sku,name,price,productType,weight }
          console.log(product)
          emptyForm()
        }
        break;
        case "furniture":
          if(!sku | !name | !price | !productType | !height | !width |!length) {
            setNotification('“Please, submit required data”')
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          } else {
            const product = { sku,name,price,productType,dimension:`${height}x${width}x${length}` }
            console.log(product)
            emptyForm()
          }
          break;
      default:
        setNotification('“Please, submit required data”')
        setTimeout(() => {
          setNotification(null)
        }, 5000)
    }

  }

  return (
    <div className='addProduct-container'>
        <div className='header'>
            <h2>Product Add</h2>
            <div className='button-container'>
                <button className='save' onClick={handleSubmit}>Save</button>
                <Link to='/' style={{textDecoration:'none'}}>
                  <button className='cancel'>Cancel</button>
                </Link>
            </div>
        </div>
        <hr />
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
    </div>
  )
}

export default AddProduct