import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function CartWidget() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-widget">
      <FaShoppingCart size={24} />
      {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
    </Link>
  );
}

export default CartWidget;
