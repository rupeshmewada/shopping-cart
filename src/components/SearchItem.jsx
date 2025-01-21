import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import { items } from './Data'

export default function SearchItem({cart, setCart }) {
  const {term} = useParams()

  const [filterData, setFilterData] = useState([])

  useEffect(() => {
    const filterdata = items.filter((item) => item.title.toLowerCase().includes(term.toLowerCase()) )
    setFilterData(filterdata)
    console.log("filterData =",filterdata);
    
  }, [])
  

  return (
    <>
    <Product items={filterData} />
    </>
  )
}
