import React from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
  return (
    <div>
        <div>
            <h1>Product List</h1>
            <div>
                <Link to='/addproduct' style={{textDecoration:'none'}}>
                    <button>ADD</button>
                </Link>
                <button>MASS DELETE</button>
            </div>
        </div>
        <hr />
        <div>
            Product list here
        </div>
    </div>
  )
}

export default ProductList