import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

 const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cateogries, setCategories] = useState([]);
  const [mokeData, setMokeData] = useState([]);
  
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json()
    setProducts(data)
    setMokeData(data)
    
    const category = await fetch("https://fakestoreapi.com/products/categories");
    const categoryData = await category.json()
    setCategories(categoryData)
  
  };

  const filterProducts = (category) => {
    setProducts([...mokeData].filter(item=> item.category === category))
  }

  const filterAllProducts = () => {
    setProducts(mokeData)
  }


  useEffect(() => {
    fetchProducts()
  }, []);

  const values = {products,cateogries,filterProducts,filterAllProducts};

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext)
}

export default ProductProvider;
