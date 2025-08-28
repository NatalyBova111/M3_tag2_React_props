// Импортируем хук useState из React
import { useState } from 'react'
// Подключаем стили приложения. 
import './App.css'
// Импортируем корневую страницу Home, где рендерится список товаров.
import Home from "./pages/home/Home";

// По умолчанию экспортируем функциональный компонент App.
// Именно его монтирует Vite в src/main.tsx внутрь #root.
export default function App() {
  // Компонент возвращает JSX: просто отрисовываем страницу Home.
  // Внутри Home уже подключается ProductList -> ProductCard.
  return <Home />;
}
