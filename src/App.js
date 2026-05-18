import React from "react";
import ProductList from "./components/ProductList";

function App() {
  const products = [
    {
      id: 1,
      name: "Gaming Laptop",
      price: 100000,
      inStock: true,
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 3000,
      inStock: false,
    },
    {
      id: 3,
      name: "Smart Watch",
      price: 7000,
      inStock: true,
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 2000,
      inStock: false,
    },
  ];

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}

export default App;