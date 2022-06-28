import React from 'react'
import styled from 'styled-components'
import Button from '../Button/Button.styled'
import defaultImg from '../../images/defaultProduct.jpg'

function ProductCard({ name, price, img = defaultImg }) {
  return (
    <Card>
      <Box>
        <Image src={img} alt="test" />
        <Name>{name}</Name>
        <Price>{price}$</Price>
        <Button onClick={() => console.log('test')}>Add to cart</Button>
      </Box>
    </Card>
  )
}

export default ProductCard

const Card = styled.li`
  margin: 10px;
  width: 300px;
  height: 200px;
  background-color: #c97e7e;
  border-radius: 4px;
  padding: 10px;
`

const Box = styled.div`
  width: 280px;

  margin: 0 auto;
`

const Image = styled.img`
  width: 280px;
  height: 150px;
  object-fit: cover;
`

const Name = styled.p``

const Price = styled.p``

// const Button = styled.button`
//   background-color: aqua;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `
