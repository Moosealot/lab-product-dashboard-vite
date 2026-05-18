import React from "react";
import styles from "../styles/ProductCard.module.css";
import { CardContent, Typography, Button } from "@mui/material";

function ProductCard({ product, onRemove }) {
  return (
    <div className={`${product.inStock ? styles.card : styles.outOfStockCard} ${product.inStock ? "" : "outOfStockClass"}`}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1">
          Price: ${product.price}
        </Typography>
        <Typography
          variant="body2"
          color={product.inStock ? "green" : "red"}
          sx={{ marginTop: 1 }}
        >
          {product.inStock ? "In Stock" : "Out of Stock"}
        </Typography>
        <Button
          variant="contained"
          color={product.inStock ? "primary" : "error"}
          disabled={!product.inStock}
          sx={{ marginTop: 2 }}
        >
          {product.inStock ? "Buy Now" : "Unavailable"}
        </Button>
        <button onClick={() => onRemove(product.id)}>Remove</button>
      </CardContent>
    </div>
  );
}

export default ProductCard;