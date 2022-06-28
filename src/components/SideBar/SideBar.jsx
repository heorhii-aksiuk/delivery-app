import React from 'react'
import styled from 'styled-components'
import ShopCard from '../ShopCard/ShopCard'
import data from '../../data.json'

function SideBar({ getShopId }) {
  return (
    <Container>
      <List>
        Shops:
        {data.map((el) => (
          <ShopCard key={el.id} getShopId={getShopId} shop={el} />
        ))}
      </List>
    </Container>
  )
}

export default SideBar

const Container = styled.aside`
  background-color: #af5e5e;
  width: 150px;
  height: 100vh;
`

const List = styled.ul``
