import React,{ useState } from 'react'
import { Link } from 'react-router-dom'

import products from '../../Constants/products'
import Product from '../../Components/Product/Product'
import './productlist.css'

const ProductList = () => {
    const [checkedProducts,setCheckedProducts] = useState([])

    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckedProducts([...checkedProducts,value])
        } else {
            setCheckedProducts(checkedProducts.filter(item => item !== value))
        }
    }

    const handleMassDelete = () => {
        console.log(checkedProducts)
    }

  return (
    <div className='productlist-container'>
        <div className='header'>
            <h1>Product List</h1>
            <div className='button-container'>
                <Link to='/addproduct' style={{textDecoration:'none'}}>
                    <button className='add'>ADD</button>
                </Link>
                <button 
                    className='mass-delete'
                    onClick={handleMassDelete}
                >MASS DELETE</button>
            </div>
        </div>
        <hr />
        <div className='body'>
            {products.map(product =>
            <Product
                key={product.id} 
                product={product} 
                handleCheckBox={handleCheckBox} 
                />)
            }
        </div>
    </div>
  )
}

export default ProductList