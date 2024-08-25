import React from 'react';
import { Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function CartWidget() {
  const fixedItemCount = 5; // Número fijo (hardcodeado) para mostrar en la notificación

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <FaShoppingCart size={24} />
      <Badge pill bg="danger" style={{ position: 'absolute', top: '-10px', right: '-10px' }}>
        {fixedItemCount}
      </Badge>
    </div>
  );
}

export default CartWidget;
