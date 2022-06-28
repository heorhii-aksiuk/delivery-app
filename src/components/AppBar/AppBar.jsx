import React from 'react'
import styled from 'styled-components'

function AppBar() {
  return (
    <Container>
      <Navigation>
        <List>
          <Item>Delivery App</Item>
          <Item>Shopping Card</Item>
        </List>
      </Navigation>
    </Container>
  )
}

export default AppBar

const Container = styled.header`
  height: 80px;
  min-width: 100%;
  background-color: #138bce;
`

const Navigation = styled.nav``

const List = styled.ul`
  display: flex;
`

const Item = styled.li`
  font-size: 20px;
`
