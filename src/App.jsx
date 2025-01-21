import { useState } from 'react'
import { Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetail from './components/ProductDetail'
import SearchItem from './components/SearchItem'
import Cart from './components/Cart'
import { items } from './components/Data'

function App() {
  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])
  // console.log(cart.length);

  return (
    <>
      <Navbar setData={setData} cart={cart} />

      <Routes>
        <Route path='/' element={<Product items={data} cart={cart} setCart={setCart} />} />
        <Route path='/product/:id' element={<ProductDetail items={data} cart={cart} setCart={setCart} />} />
        <Route path='/search/:term' element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}  />} />
      </Routes>


      {
        // data.map((product) => {
        //   return (
        //     < >
        //       <div className="col-sm-12 col-md-6 col-lg-4  my-4 text-center" >
        //         {/* <h2>i am from products  </h2> */}
        //         <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
        //           <Link to={`/product/${product.id}`}>
        //             <img src={product.imgSrc} className="card-img-top" alt="..." />
        //           </Link>
        //           <div className="card-body">
        //             <h5 className="card-title">{product.title}</h5>
        //             <p className="card-text">{product.description}</p>
        //             <button className='btn btn-primary mx-3'>{product.price}</button>
        //             <button className='btn btn-warning'>Add to cart</button>
        //           </div>
        //         </div>
        //       </div>

        //     </>
        //   )
        // })
      }
    </>
  )
}

export default App
