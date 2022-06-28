import React from 'react'

function ShopCard({ shop, getShopId }) {
  return (
    <li>
      <button onClick={() => getShopId(shop.id)} type="button">
        {shop.shop}
      </button>
    </li>
  )
}

export default ShopCard
