import React from "react";
import animals from "../../data/data";
import AnimalCard from "../animalCard/AnimalCard";
import "./AnimalList.css";

export default function AnimalList() {
  return (
    <section className="animals">
      {animals.map((a) => (
        <AnimalCard key={`${a.name}-${a.species}`} animal={a} />
      ))}
    </section>
  );
}
