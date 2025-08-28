import React from "react";
import AnimalList from "../../components/animalList/AnimalList";

export default function Home() {
  return (
    <main style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
      <h1 style={{ marginTop: 0 }}>Animal Database</h1>
      <p style={{ color: "#6b7280", marginTop: 8, marginBottom: 20 }}>
        Click “Show fun facts” to see interesting facts about the animal
      </p>
      <AnimalList />
    </main>
  );
}
