import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const navigate = useNavigate()

  const [cart, setCart] = useState([])

  useEffect(() => {
    fetch("/api/orders")
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setCart(data)})
  }, [])

  if (cart.length <= 30) return (
    <>
      <div className='text-center'>
        <img className='mx-auto my-20 w-2/5 max-w-sm'
        src={require('../assets/cart.png')} 
        alt="empty cart"/>
        <h1 className='text-2xl'>Your Cart is Currently Empty</h1>
        <button className='class="bg-transparent hover:bg-blue-500 mt-5  py-2 px-4 border border-blue-500 hover:border-transparent rounded"'
        onClick={() => navigate("/products")}>Start Shopping</button>
      </div>
    </>
  )

  return (
    <div>Cart</div>
  )
}

export default Cart