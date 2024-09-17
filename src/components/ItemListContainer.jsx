import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { useCart } from '../context/CartContext'; // Importamos el contexto
import './ItemListContainer.css';

const products = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 29.99,
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 49.99,
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 3,
    name: 'Producto 3',
     description:'Descripción del producto',
     price: 79.99,
     image: 'https://via.placeholder.com/300'
  },
  {
    id: 4,
    name: 'Producto 4',
     description:'Descripción del producto',
     price: 99.99,
     image: 'https://via.placeholder.com/300'
  },
  
  {
    id: 5,
    name: 'Producto 5',
     description:'Descripción del producto',
     price: 109.99,
     image: 'https://via.placeholder.com/300'
  },
  
  {
    id: 6,
    name: 'Producto 6',
     description:'Descripción del producto',
     price: 119.99,
     image: 'https://via.placeholder.com/300'
  },
  
  {
    id: 7,
    name: 'Producto 7',
     description:'Descripción del producto',
     price: 129.99,
     image: 'https://via.placeholder.com/300'
  },
  
  {
    id: 8,
    name: 'Producto 8',
     description:'Descripción del producto',
     price: 149.99,
     image: 'https://via.placeholder.com/300'
  },
  

  // Agrega más productos aquí
];

function ItemListContainer({ greeting }) {
  const [productList, setProductList] = useState([]);
  const { addToCart } = useCart();  // Obtenemos la función de agregar al carrito del contexto

  useEffect(() => {
    // Simula la carga de productos
    setProductList(products);
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);  // Llamamos a la función de agregar al carrito desde el contexto
  };

  return (
    <div className="item-list-container">
      <h1 className="greeting">{greeting}</h1>
      <ProductList products={productList} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ItemListContainer;





