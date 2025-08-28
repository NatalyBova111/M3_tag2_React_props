import React from "react";
import ProductList from "../../components/productList/ProductList";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <ProductList />
    </main>
  );
}
