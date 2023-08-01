import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json()
      setProducts(data)
    };
    fetchProducts()
  }, []);

  const values = {products};

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext)
}

export default ProductProvider;
