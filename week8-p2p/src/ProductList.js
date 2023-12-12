
import React, { useState } from 'react';
import ProductCard from './ProductCard';



const ProductList = () => {
  const [products, setProducts] = useState([
    {
      "name": "Jana",
      "price": 100,
      "color": "Red",
      "type": "Dress",
      "image": "/images/reddress.jpeg"
    },
    {
      "name": "Gucci",
      "price": 500,
      "color": "Green",
      "type": "Dress",
      "image": "/images/greendress.jpeg"
    },
    {
      "name": "Debby",
      "price": 400,
      "color": "Black",
      "type": "Dress",
      "image": "/images/blackdress.jpeg"
    },
    {
      "name": "Tutu top",
      "price": 400,
      "color": "Black",
      "type": "Top",
      "image": "/images/top2.jpeg"
    },
    {
      "name": "Armless",
      "price": 200,
      "color": "Red",
      "type": "Top",
      "image": "/images/top1.jpeg"
    },
    {
      "name": "YAS",
      "price": 200,
      "color": "Black",
      "type": "Dress",
      "image": "/images/blackshort.jpeg"
    }
  ]);
    console.log ('products:', products);
    
  const handleDelete = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    setIsEditingIndex(index);
  };

  const handleSave = (index, updatedProduct) => {
    const updatedProducts =[...products];
    updatedProducts[index] = updatedProduct;
    setProducts(updatedProducts);
  };

  const handleCancel = () => {
    setIsEditingIndex(null);
  };

  const handleAdd = (newProduct) => {
    setProducts([...products,newProduct]);
  };
  const [editingIndex,setIsEditingIndex] = useState(null);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      {products.map((product, index) => (
        

        <ProductCard
          key={index}
          index={index}
          product={product}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onSave={handleSave}
          onCancel={handleCancel}
          isEditting={index === editingIndex}
        />
      ))}
      
      <form

      style={{
        marginTop: '20px',
        
      }}
  onSubmit={(e) => {
    e.preventDefault();
    const newProduct = {
      name: e.target.productName.value,
      image: `/images/${e.target.productImage.value || 'second.jpeg'}`,
    };
    console.log('New Product:', newProduct);
    handleAdd(newProduct);
  }}
>
  <label htmlFor="productName">Name:</label>
  <input type="text" id="productName" name="productName" />

  <label htmlFor="productImage">Image:</label>
  <input type="text" id="productImage" name="productImage" placeholder="second.jpeg" />

  <button type="submit">Add Product</button>
</form>


    </div>
  );
};

export default ProductList;
