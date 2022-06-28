import AppBar from './components/AppBar/AppBar'
import SideBar from './components/SideBar/SideBar'
import ProductsList from './components/ProductsList/ProductsList'
import { useState } from 'react'
import styled from 'styled-components'

function App() {
  const [shopId, setShopId] = useState('1')
  const getShopId = (id) => {
    setShopId(id)
    console.log(id)
  }

  return (
    <>
      <AppBar></AppBar>
      <Container>
        <SideBar getShopId={getShopId}></SideBar>
        <ProductsList shopId={shopId}></ProductsList>
      </Container>
    </>
  )
}

export default App

const Container = styled.div`
  display: flex;
  width: 1200px;
  margin: 0 auto;
  background-color: beige;
`
