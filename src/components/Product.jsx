import React, { Fragment } from 'react'
import { items } from './Data'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


export default function Product({ items, cart, setCart }) {

    // console.log(cart);
    
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
            <div className="container">
                <div className="row">

                    {
                        items.map((product) => {
                            return (
                                <Fragment key={product.id}>
                                    <div className="col-sm-12 col-md-6 col-lg-4  my-4 text-center" >
                                        <div className="card" style={{ width: '18rem', textAlign: 'center' }}>
                                            <Link to={`/product/${product.id}`}>
                                                <img src={product.imgSrc} className="card-img-top" alt="..." />
                                            </Link>
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <button className='btn btn-primary mx-3'>{product.price} ₹</button>
                                                <button className='btn btn-warning'
                                                    onClick={() => addToCart(product.id, product.category, product.title, product.imgSrc, product.amazonLink, product.description, product.price)}
                                                >Add to cart</button>
                                            </div>
                                        </div>
                                    </div>

                                </Fragment>
                            )
                        })
                    }
                </div>
            </div>
        </>

    )
}
