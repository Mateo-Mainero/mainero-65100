// src/pages/CartPage.jsx
import React from 'react';
import { ListGroup, Button, Form, Row, Col, Modal } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function CartPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const calculateSubtotal = (price, quantity) => price * quantity;
  const calculateTotal = () => cart.reduce((total, item) => total + calculateSubtotal(item.price, item.quantity), 0);

  const handleRemoveClick = (item) => {
    setItemToRemove(item);
    setShowConfirm(true);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      removeFromCart(itemToRemove);
      setItemToRemove(null);
    }
    setShowConfirm(false);
  };

  const handleCancelRemove = () => {
    setItemToRemove(null);
    setShowConfirm(false);
  };

  return (
    <div className="container mt-3">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((item, index) => (
              <ListGroup.Item key={index} className="d-flex align-items-center">
                <Row className="w-100">
                  <Col md={2}>
                    <img src={item.image} alt={item.name} style={{ maxWidth: '100px', height: 'auto' }} />
                  </Col>
                  <Col md={6}>
                    <div>{item.name}</div>
                    <div>${item.price}</div>
                    <Form.Control
                      type="number"
                      value={item.quantity}
                      min="1"
                      onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
                      style={{ width: '120px', display: 'inline-block' }}
                    />
                    <span style={{ marginLeft: '10px' }}>
                      Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                    </span>
                  </Col>
                  <Col md={4} className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => handleRemoveClick(item)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <h4>Total: ${calculateTotal().toFixed(2)}</h4>
            <div>
              <Button variant="primary" onClick={clearCart} className="me-2">Clear Cart</Button>
              <Button variant="success" onClick={() => alert('Proceed to checkout')}>Checkout</Button>
            </div>
          </div>
        </>
      )}

      {/* Confirmation Modal */}
      <Modal show={showConfirm} onHide={handleCancelRemove}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Removal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to remove this item from your cart?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelRemove}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleConfirmRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartPage;
