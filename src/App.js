import React from "react";
import "./App.css";

function ProductCard({ name, price, status }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
      <p className={status === "In Stock" ? "in-stock" : "out-stock"}>
        Status: {status}
      </p>
    </div>
  );
}

function App() {
  const products = [
    { name: "Wireless Mouse", price: 25.99, status: "In Stock" },
    { name: "Keyboard", price: 45.5, status: "Out of Stock" },
    { name: "Monitor", price: 199.99, status: "In Stock" },
  ];

  return (
    <div className="container">
      <h1>Products List</h1>
      <div className="products">
        {products.map((p, i) => (
          <ProductCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}

export default App;
