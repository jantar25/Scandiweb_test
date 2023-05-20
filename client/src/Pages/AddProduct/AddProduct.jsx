import React,{ useState } from 'react'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'

import ProductForm from '../../Components/ProductForm/ProductForm'
import { baseURL } from '../../Constants'
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

  const handleTextChange = (e) => {
    setInputs({...inputs,[e.target.id]:e.target.value})
  }

  const handleNumberChange = (e) => {
    const regex = /^\d+(\.\d{1,2})?$/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setInputs({...inputs,[e.target.id]:e.target.value})
    } else {
      setNotification('“Please, provide the data of indicated type”')
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  };

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

  const createProduct = async(product) => {
    try {
      await axios.post(baseURL, {...product})
      emptyForm()
      navigate('/') 
    } catch (error) {
      console.error(error)
      setNotification(error.message)
      setTimeout(() => {
        setNotification(null)
      }, 5000)
    }
  }

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
            createProduct(product)
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
          createProduct(product)
        }
        break;
        case "furniture":
          if(!sku | !name | !price | !productType | !height | !width | !length) {
            setNotification('“Please, submit required data”')
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          } else {
            const product = { ...common,dimensions:`${height}x${width}x${length}` }
            createProduct(product)
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
            <h1>Product Add</h1>
            <div className='button-container'>
                <button className='Save' onClick={handleSubmit}>Save</button>
                <Link to='/' style={{textDecoration:'none'}}>
                  <button className='cancel'>Cancel</button>
                </Link>
            </div>
        </div>
        <hr />
        <ProductForm
          notification={notification}
          inputs={inputs}
          handleTextChange={handleTextChange}
          handleNumberChange={handleNumberChange}
        />
    </div>
  )
}

export default AddProduct