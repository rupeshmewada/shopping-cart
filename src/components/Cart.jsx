import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({ cart, setCart }) {
  // console.log(cart);

  function clearCart(){
    setCart("")
  }
  
  return (
    <>
      <div className="  mt-5 ">
        {
          cart.length > 0 ?
            cart.map((product) => (

              <div className="card my-3  text-center" style={{ width: "600px", margin: 'auto' }}>
                <div className="row no-gutters d-flex align-items-center">
                  <div className="col-md-4">
                    {/* <img src={product.} className="card-img" alt="..." /> */}
                    <img src={product.imgSrc} className="card-img-top" alt="..." />

                  </div>
                  <div className="col-md-8 text-center pb-4" >
                    <div className="card-body">
                      <h1 className="card-title">{product.title}</h1>
                      <p className="card-text">{product.description}</p>
                      <button className='btn btn-primary mx-3'>{product.price} ₹</button>
                      <button className='btn btn-warning'
                      >Buy now</button>
                    </div>
                  </div>
                </div>
              </div>

            ))
            :
            <div className='text-center mt-5'>
              <h1 >Your cart is empty</h1>
              <Link to={'/'} className='btn btn-warning mx-3' >Continue shopping</Link>
            </div>
        }

        {
          cart.length > 0 &&
          <div className="container text-center mt-5">
            <button className='btn btn-primary mx-3'>Check Out</button>
            <button className='btn btn-danger mx-3' onClick={clearCart}>Clear Cart</button>
          </div>
        
        }
      </div >

    </>

  )
}
