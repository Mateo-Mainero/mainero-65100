import React from 'react';
import { ListGroup, Button, Form, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faShoppingCart, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import './CartPage.css'; // Archivo CSS personalizado

function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();

  const calculateSubtotal = (price, quantity) => price * quantity;
  const calculateTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);

  const handleRemoveClick = (item) => {
    Swal.fire({
      title: '¿Eliminar el producto?',
      text: `¿Estás seguro de que deseas eliminar ${item.name} del carrito?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(item);
        Swal.fire({
          title: 'Producto eliminado',
          text: `${item.name} ha sido eliminado del carrito.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleClearCart = () => {
    Swal.fire({
      title: '¿Vaciar el carrito?',
      text: '¿Estás seguro de que deseas vaciar todo el carrito?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Vaciar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: 'Carrito vaciado',
          text: 'Has vaciado el carrito correctamente.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleCheckout = () => {
    Swal.fire({
      title: 'Confirmar Compra',
      text: '¿Deseas confirmar tu compra?',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar Compra',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire({
          title: '¡Compra Exitosa!',
          text: 'Gracias por tu compra. Tu pedido ha sido procesado correctamente.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  return (
    <div className="container mt-5 cart-page">
      <h2 className="cart-title">
        <FontAwesomeIcon icon={faShoppingCart} /> Carrito de Compras
      </h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío.</p>
          <FontAwesomeIcon icon={faTimes} className="icon-empty" />
        </div>
      ) : (
        <>
          <ListGroup className="product-list">
            {cart.map((item) => (
              <ListGroup.Item key={item.id} className="d-flex align-items-center product-item">
                <Row className="w-100 align-items-center">
                  <Col md={2}>
                    <img src={item.image} alt={item.name} className="product-image" />
                  </Col>
                  <Col md={6}>
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">${item.price.toFixed(2)}</div>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                      className="quantity-input"
                    />
                    <div className="subtotal">
                      Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                    </div>
                  </Col>
                  <Col md={4} className="text-end">
                    <Button variant="danger" onClick={() => handleRemoveClick(item)} className="remove-btn">
                      <FontAwesomeIcon icon={faTrashAlt} /> Eliminar
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>

          <div className="mt-4 d-flex justify-content-between align-items-center total-section">
            <h4>Total: ${calculateTotal().toFixed(2)}</h4>
            <div>
              <Button variant="outline-secondary" onClick={handleClearCart} className="clear-btn me-2">
                <FontAwesomeIcon icon={faTimes} /> Vaciar Carrito
              </Button>
              <Button variant="success" onClick={handleCheckout} className="checkout-btn">
                <FontAwesomeIcon icon={faCheck} /> Comprar
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;







