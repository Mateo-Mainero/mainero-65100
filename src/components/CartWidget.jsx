import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget({ onClick }) {
  const fixedItemCount = 5; // Número fijo (hardcodeado) para mostrar en la notificación

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button 
        onClick={onClick} 
        style={{ 
          background: 'none', 
          border: 'none', 
          padding: 0, 
          cursor: 'pointer',
          position: 'relative'
        }}
      >
        <FaShoppingCart size={24} />
        <Badge pill bg="danger" style={{ position: 'absolute', top: '-10px', right: '-10px' }}>
          {fixedItemCount}
        </Badge>
      </button>
    </div>
  );
}

export default CartWidget;