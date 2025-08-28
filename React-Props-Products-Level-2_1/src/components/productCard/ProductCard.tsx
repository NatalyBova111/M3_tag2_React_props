import React from "react";
import "./ProductCard.css";

type Props = {
  name: string;
  price: number;   // $
  image: string;   // путь типа "/images/cocooil.jpg"
};

export default function ProductCard({ name, price, image }: Props) {
  const usd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);

  return (
    <div className="card">
      <img className="card__img" src={image} alt={name} loading="lazy" />
      <div className="card__body">
        <p className="card__title">{name}</p>
        <p className="card__price">{usd}</p>
        <button
          className="card__btn"
          onClick={() => alert(`BUY NOW: ${name}`)}
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}
