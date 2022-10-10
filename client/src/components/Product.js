import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
    const params =useParams();
    const [product, setProduct] = useState({})
    const{id} = params
    useEffect(() => {
        fetch(`/api/products/${id}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            console.log(data)
        })
    },[])

  return (
    <>
    <div>Product {id}</div>
    <div className='flex sm-flex-col '>
        <div className='w-2/5'>

        </div>
        <div className='w-3/5'>

        </div>

    </div>
    </>
  )
}

export default Product