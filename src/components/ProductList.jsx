import React, { useState } from "react";
import ProductCard from "./ProductCard";

import { Button, Container, Typography, Grid } from "@mui/material";

function ProductList({ products }) {
  const [showInStock, setShowInStock] = useState(false);

  const filteredProducts = showInStock
    ? products.filter((product) => product.inStock)
    : products;

  const noProductsInStock = products.every(
    (product) => product.inStock === false
  );

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Product Dashboard
      </Typography>

      <Button
        variant="contained"
        onClick={() => setShowInStock(!showInStock)}
        sx={{ marginBottom: 4 }}
      >
        {showInStock ? "Show All Products" : "Show In-Stock Only"}
      </Button>

      {noProductsInStock ? (
        <Typography variant="h5" color="error">
          No products are currently in stock.
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredProducts.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default ProductList;