import React from 'react'

export const Product = ({
    productName,
    productPrice,
    category,
    brand
    }) => {
  return (
    <>
    <h1> Product </h1>
    <h2> NAME OF PRODUCT : {productName}</h2>
    <h2> PRICE : {productPrice}</h2>
    <h2> CATEGORY : {category}</h2>
    <h2> BRAND : {brand}</h2>
    </>
  )
}