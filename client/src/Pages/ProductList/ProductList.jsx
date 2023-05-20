import React,{ useState,useEffect } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'

import { baseURL } from '../../Constants'
import Product from '../../Components/Product/Product'
import './productlist.css'

const ProductList = () => {
    const [checkedProducts,setCheckedProducts] = useState([])
    const [products, setProducts] = useState();

    useEffect(() => {
        const getProducts = async () => {
            try {
                const response = await axios.get(baseURL)
                setProducts(response.data);
            } catch (error) {
                console.log(error)
            }   
        }
        getProducts()
    }, []);

    const handleCheckBox = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setCheckedProducts([...checkedProducts,value])
        } else {
            setCheckedProducts(checkedProducts.filter(item => item !== value))
        }
    }

    const handleMassDelete = async () => {
        try {
            await axios.patch(baseURL,checkedProducts)
            setProducts(products.filter(product => !checkedProducts.includes(product.SKU)))
        } catch (error) {
           console.log(error) 
        }
    }

    if (!products) return null

    const sortedProduct = products.sort((a,b)=> b.id-a.id)

  return (
    <div className='productlist-container'>
        <div className='header'>
            <h1>Product List</h1>
            <div className='button-container'>
                <Link to='/addproduct' style={{textDecoration:'none'}}>
                    <button type="button" className='add'>ADD</button>
                </Link>
                <button
                    type="button"
                    className='mass-delete'
                    onClick={handleMassDelete}
                >MASS DELETE</button>
            </div>
        </div>
        <hr />
        <div className='body'>
            {sortedProduct.map(product =>
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