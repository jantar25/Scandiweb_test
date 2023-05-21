import React, { createContext, useState,useContext } from "react"

const ProductsContext = createContext()
const SetProductsContext = createContext()

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    return (
        <SetProductsContext.Provider value={setProducts}>
            <ProductsContext.Provider value={products} >
                {children}
            </ProductsContext.Provider>
        </SetProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)
export const useSetProductsContext = () => useContext(SetProductsContext)
