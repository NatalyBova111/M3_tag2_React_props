import React, { useState } from "react";
import type { Animal } from "../../data/data";
import "./AnimalCard.css";

type Props = { animal: Animal };

export default function AnimalCard({ animal }: Props) {
  const [showFacts, setShowFacts] = useState(false);

  return (
    <article className="animal-card" aria-label={`${animal.name} card`}>
      <div className="animal-card__header">
        <span className="animal-card__emoji" role="img" aria-label={animal.name}>
          {animal.emoji}
        </span>
        <h3 className="animal-card__name">{animal.name}</h3>
        <p className="animal-card__species"><em>{animal.species}</em></p>
      </div>

      <ul className="animal-card__meta">
        <li><strong>Habitat:</strong> {animal.habitat}</li>
        <li><strong>Diet:</strong> {animal.diet}</li>
        <li><strong>Lifespan:</strong> {animal.lifespan} years</li>
      </ul>

      <button className="animal-card__btn" onClick={() => setShowFacts(v => !v)}>
        {showFacts ? "Hide fun facts" : "Show fun facts"}
      </button>

      {showFacts && (
        <ul className="animal-card__facts">
          {animal.funFacts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
