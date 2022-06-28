import React from 'react'
import data from '../../data.json'
import ProductCard from '../ProductCard/ProductCard'

function ProductsList({ shopId }) {
  return (
    <div>
      {
        <ul>
          {data[shopId - 1].products.map((product) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
            ></ProductCard>
          ))}
        </ul>
      }
    </div>
  )
}

export default ProductsList
