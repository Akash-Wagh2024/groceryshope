import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarAdmin from './NavBarAdmin';
import { Modal, Button, Form } from 'react-bootstrap';

export default function Stock() {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addQuantity, setAddQuantity] = useState('');

  // Fetch product list
  const fetchProducts = () => {
    axios.get('http://localhost:8080/groceryshope/findall')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching product stock:", error));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle button click to open modal
  const handleAddStockClick = (product) => {
    setSelectedProduct(product);
    setAddQuantity('');
    setShowModal(true);
  };

  // Handle stock update submission
  const handleUpdateStock = () => {
    const addedQty = parseInt(addQuantity);
    if (!addedQty || addedQty <= 0) {
      alert("Enter a valid quantity to add.");
      return;
    }

    const updatedStock = parseInt(selectedProduct.stock) + addedQty;

    axios.put(`http://localhost:8080/groceryshope/updatestock/${selectedProduct.id}`, { stock: updatedStock })
      .then(() => {
        setShowModal(false);
        fetchProducts(); // refresh product list
      })
      .catch((error) => {
        console.error("Error updating stock:", error);
        alert("Failed to update stock.");
      });
  };

  return (
    <div>
      <NavBarAdmin />

      <div className="container mt-4">
        <h2 className="text-center mb-4">📦 Product Stock Details</h2>
        <table className="table table-striped table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price (₹ / KG)</th>
              <th>Stock (KG)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">No products available</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.product}</td>
                  <td>₹{product.price}</td>
                  <td className={parseInt(product.stock) < 10 ? 'text-danger fw-bold' : ''}>
                    {parseInt(product.stock) < 10 ? `⚠️ ${product.stock}` : product.stock}
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handleAddStockClick(product)}>
                      ➕ Add Stock
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Add Stock Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Stock for: {selectedProduct?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Current Stock: {selectedProduct?.stock} KG</Form.Label>
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Enter Quantity to Add (KG)</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={addQuantity}
                onChange={(e) => setAddQuantity(e.target.value)}
                placeholder="e.g. 5"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
          <Button variant="success" onClick={handleUpdateStock}>Update Stock</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
