import React from 'react';
import { Link } from "react-router-dom";
import {HiOutlineShoppingCart} from 'react-icons/hi';
import { useSelector } from 'react-redux';

const Header = () => {

  const { cartItems } = useSelector((state)=> state.cart);

  return (
    <nav>
        <h2>Cart</h2>
        <div>
            <Link to={'/'} >Home</Link>
            <Link to={'/cart'}><HiOutlineShoppingCart/>
            <p>{cartItems.length}</p>
            </Link>
        </div>
    </nav>
  )
}

export default Header