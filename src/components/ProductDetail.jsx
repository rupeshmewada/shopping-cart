import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { ToastContainer, toast } from 'react-toastify';


export default function ProductDetail({ items, cart, setCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState([])

  // console.log("items = ", items);

  useEffect(() => {
    const filterProduct = items.filter((item) => item.id == id)
    // console.log(filterProduct);

    setProduct(filterProduct[0])

    const filterItems = items.filter((item) => item.category === product.category)

    setRelatedProduct(filterItems)
  }, [id, product.category])


  const addToCart = (id, category, title, imgSrc, amazonLink, description, price) => {
    const obj = {
      id, category, title, imgSrc, amazonLink, description, price
    }
    setCart([...cart, obj])

    toast('Card added successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      // transition: Bounce,
    });
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition={Bounce}
      />
      <div className="col-md-8 text-center m-auto">
        <div className="img-wrapper " >
          <div className="">
            <img src={product.imgSrc} className="img-src" alt="..." />
          </div>
          <div className="card-body">
            <h1 className="card-title">{product.title}</h1>
            <p className="card-text">{product.description}</p>
            <button className='btn btn-primary mx-3'>{product.price}</button>
            {/* <button className='btn btn-warning'>Add to cart</button> */}
            <button className='btn btn-warning'
              onClick={() => addToCart(product.id, product.category, product.title, product.imgSrc, product.amazonLink, product.description, product.price)}
            >Add to cart</button>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          {
            relatedProduct.map((product) => {
              return (
                <>
                  <div className="col-sm-12 col-md-6 col-lg-4  my-4 text-center">
                    <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                      <Link to={`/product/${product.id}`}>
                        <img src={product.imgSrc} className="card-img-top" alt="..." />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <button className='btn btn-primary mx-3'>{product.price}</button>
                        <button className='btn btn-warning'>Add to cart</button>
                      </div>
                    </div>
                  </div>

                </>
              )
            })
          }
        </div>
      </div> */}
      <h1 className='text-center'>Related Product</h1>
      <Product items={relatedProduct} cart={cart} setCart={setCart}/>

    </>
  )
}
