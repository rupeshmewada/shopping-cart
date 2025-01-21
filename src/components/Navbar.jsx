import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { useState } from 'react'
import { FaCartArrowDown } from 'react-icons/fa';


export default function Navbar({ setData, cart }) {
    const location = useLocation()
    console.log(location);

    const navigate = useNavigate()

    const [searchItem, setSearchItem] = useState("")

    const filterByCategory = (category) => {
        const element = items.filter((product) => product.category === category.toLowerCase())
        setData(element)
    }

    const noFilter = () => {
        setData(items)
    }

    const filterBtPrice = (price) => {
        const element = items.filter((prod) => prod.price >= price)
        console.log(element);
        setData(element)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search/${searchItem}`)
    }

    function goToCart() {
        navigate(`/cart`)
    }

    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                    <Link to={'/'} className="brand">
                        E-cart
                    </Link>

                    <form className="search-bar" onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder='search products'
                            onChange={(e) => setSearchItem(e.target.value)}
                        />
                    </form>

                    <Link to={'/cart'} className="cart">
                        <button type="button" className="btn btn-primary"
                            onClick={goToCart}>
                            <FaCartArrowDown style={{fontSize:'1.5rem'}} /> <span className="badge badge-light">{cart.length}</span>
                        </button>
                    </Link>
                </div>
                {
                    location.pathname == '/' &&
                    <div className="nav-bar-wrapper">
                        <div className="items">filter by {"->"}</div>
                        <div className="items" onClick={() => noFilter()}>No filter</div>
                        <div className="items" onClick={() => filterByCategory('mobiles')}>Mobiles</div>
                        <div className="items" onClick={() => filterByCategory('laptops')}>Laptops</div>
                        <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>
                        <div className="items" onClick={() => filterBtPrice("29999")}>{">="}29999</div>
                        <div className="items" onClick={() => filterBtPrice("49999")}>{">="}49999</div >
                        <div className="items" onClick={() => filterBtPrice("69999")}>{">="}69999</div>
                        <div className="items" onClick={() => filterBtPrice("89999")}>{">="}89999</div>
                    </div>


                }

            </header>

        </>
    )
}
