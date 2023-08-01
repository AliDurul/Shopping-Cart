import React from 'react';
import { useProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const Home = () => {
  const {products} = useProductContext()

  return <div>
    <section className='py-16'>
      <div className="container mx-auto">
         <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 max-w-sm mx-auto md:max-w-none md:mx-0'>
          {
            products.map(product=>{
              return <Product key={product?.id} product={product}/>
            })
          }
         </div>
      </div>
    </section>
  </div>;
};

export default Home;
