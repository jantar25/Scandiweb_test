import React,{ useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import ProductForm from '../../Components/ProductForm/ProductForm'
import './addproduct.css'

const AddProduct = () => {
  const navigate = useNavigate()
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

  const common = { sku,name,price,productType }

  const handleSubmit = () => {
    switch (productType) {
      case "dvd":
          if(!sku | !name | !price | !productType | !size) {
            setNotification('“Please, submit required data”')
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          } else {
            const product = { ...common,size }
            console.log(product)
            emptyForm()
            navigate('/')
          }
        break;
      case "book":
        if(!sku | !name | !price | !productType | !weight) {
          setNotification('“Please, submit required data”')
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        } else {
          const product = { ...common,weight }
          console.log(product)
          emptyForm()
          navigate('/')
        }
        break;
        case "furniture":
          if(!sku | !name | !price | !productType | !height | !width | !length) {
            setNotification('“Please, submit required data”')
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          } else {
            const product = { ...common,dimension:`${height}x${width}x${length}` }
            console.log(product)
            emptyForm()
            navigate('/')
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
        <ProductForm
          notification={notification}
          inputs={inputs}
          handleChange={handleChange}
        />
    </div>
  )
}

export default AddProduct