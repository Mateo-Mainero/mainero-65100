import React, { useState } from 'react';
import Swal from 'sweetalert2';  // Importamos SweetAlert
import './ProductList.css';

function ProductList({ products, onAddToCart }) {
  const handleAddToCart = (product) => {
    onAddToCart(product); // Llama a la función de añadir al carrito

    // SweetAlert: Mostrar una notificación de éxito
    Swal.fire({
      title: 'Producto añadido',
      text: `${product.name} ha sido añadido al carrito.`,
      icon: 'success',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-details">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(product)}
          >
            Añadir al carrito
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;






