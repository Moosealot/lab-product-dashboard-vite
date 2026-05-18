import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Button, Container, Grid } from "@mui/material";

function ProductList({ products, onRemove }) {
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  const noProductsInStock = products.every((p) => p.inStock === false);

  return (
    <Container sx={{ marginTop: 5 }}>
      <Button
        variant="contained"
        onClick={() => setShowInStock(!showInStock)}
        sx={{ marginBottom: 4 }}
      >
        {showInStock ? "Show All Products" : "Show In-Stock Only"}
      </Button>

      {noProductsInStock ? (
        <p>No products are currently in stock.</p>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              {/* Required by tests: plain div with out-of-stock class + Remove button */}
              <div className={product.inStock ? "" : "out-of-stock"}>
                <ProductCard product={product} />
                <button onClick={() => onRemove(product.id)}>Remove</button>
              </div>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;