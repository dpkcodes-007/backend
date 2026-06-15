import React from 'react'

export const Product = ({
        name,
        age,
        course,
        city
    }) => {
  return (
    <>
    <h1> Product </h1>
    <h2> NAME  : {name}</h2>
    <h2> AGE : {age}</h2>
    <h2> COURSE : {course}</h2>
    <h2> CITY : {city}</h2>
    </>
  )
}