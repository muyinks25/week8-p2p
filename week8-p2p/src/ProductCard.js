
import React, { useState } from 'react';

const ProductCard = ({ index, product, onDelete, onEdit, onSave, onCancel }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ ...product });

  const handleEdit = () => {
    setIsEditing(true);
    onEdit(index);
  };

  const handleSave = () => {
    setIsEditing(false);
    onSave(index, editedProduct);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedProduct({ ...product });
    onCancel();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <img src={product.image} alt={product.name} style={{ maxWidth: '100%', height: 'auto' }} />
      <p style={{ margin: '10px 0' }}>Name: {isEditing ? <input value={editedProduct.name} onChange={(e) => setEditedProduct({ ...editedProduct, name: e.target.value })} /> : product.name}</p>
      {/*  product details is add */}
      {isEditing ? (
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <div>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
