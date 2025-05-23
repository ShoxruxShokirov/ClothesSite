"use client"

import { useState } from "react"
import "./style.scss"

export default function CyclingPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")

  const subcategories = [
    { id: "all", name: "All products" },
    { id: "mountain", name: "Mountain bikes" },
    { id: "road", name: "Road bikes" },
    { id: "city", name: "City bikes" },
    { id: "parts", name: "Spare parts" },
    { id: "accessories", name: "accessories" }
  ]

  return (
    <main className="cycling-page">
      <section className="category-header">
        <div className="container">
          <h1>Cycling</h1>
          <p>Wide range of bicycles, parts and accessories for cycling</p>
        </div>
      </section>

      <section className="subcategories">
        <div className="container">
          <div className="subcategories-list">
            {subcategories.map((subcategory) => (
              <button
                key={subcategory.id}
                className={`subcategory-btn ${selectedSubcategory === subcategory.id ? "active" : ""}`}
                onClick={() => setSelectedSubcategory(subcategory.id)}
              >
                {subcategory.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="products-grid">
            {/* Здесь будет сетка товаров */}
            <div className="no-products">
              <p>Products coming soon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 