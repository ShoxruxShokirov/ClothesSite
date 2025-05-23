"use client"

import { useState } from "react"
import "./style.scss"

export default function WinterSportsPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid")
  const [showFilters, setShowFilters] = useState(false)

  const subcategories = [
    { id: "all", name: "Все товары" },
    { id: "skiing", name: "Лыжи" },
    { id: "snowboarding", name: "Сноуборды" },
    { id: "ice-skates", name: "Коньки" },
    { id: "snow-shoes", name: "Снегоступы" },
    { id: "equipment", name: "Снаряжение" },
    { id: "clothing", name: "Одежда" },
    { id: "accessories", name: "Аксессуары" }
  ]

  const brands = [
    "Salomon",
    "Atomic",
    "Burton",
    "Nike",
    "Adidas",
    "The North Face",
    "Columbia",
    "Mammut"
  ]

  const features = [
    "Новинки",
    "Акции",
    "Хит продаж",
    "Распродажа"
  ]

  return (
    <main className="winter-sports-page">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>/</span>
            <span>Winter sports</span>
          </div>
          <h1>Winter sports</h1>
        </div>
      </div>

      <div className="container">
        <div className="category-layout">
          <aside className={`filters-sidebar filters-sidebar-modern ${showFilters ? 'active' : ''}`}>
            <div className="filters-header">
              <h3>Фильтры</h3>
              <button className="close-filters" onClick={() => setShowFilters(false)}>
                <svg viewBox="0 0 24 24" width="24" height="24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                </svg>
              </button>
            </div>

            <div className="filter-section">
              <h3>Категории</h3>
              <div className="filter-list">
                {subcategories.map((subcategory) => (
                  <label key={subcategory.id} className="filter-item">
                    <input
                      type="radio"
                      name="category"
                      checked={selectedSubcategory === subcategory.id}
                      onChange={() => setSelectedSubcategory(subcategory.id)}
                    />
                    <span>{subcategory.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Features</h3>
              <div className="filter-list">
                {features.map((feature) => (
                  <label key={feature} className="filter-item">
                    <input type="checkbox" />
                    <span>{feature}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Brands</h3>
              <div className="filter-list">
                {brands.map((brand) => (
                  <label key={brand} className="filter-item">
                    <input type="checkbox" />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Price</h3>
              <div className="price-range">
                <input type="range" min="0" max="1000000" step="10000" />
                <div className="price-inputs">
                  <input type="number" placeholder="От" />
                  <span>-</span>
                  <input type="number" placeholder="До" />
                </div>
              </div>
            </div>

            <button className="reset-filters">
              Reset filters
            </button>
          </aside>

          <div className="products-section">
            <div className="products-header">
              <div className="products-count">
                Found: <span>0 products</span>
              </div>
              <div className="products-controls">
                <button 
                  className="show-filters-btn"
                  onClick={() => setShowFilters(true)}
                >
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/>
                  </svg>
                  Фильтры
                </button>
                <div className="view-mode">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <rect x="3" y="3" width="18" height="4" />
                      <rect x="3" y="10" width="18" height="4" />
                      <rect x="3" y="17" width="18" height="4" />
                    </svg>
                  </button>
                </div>
                <div className="products-sort">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="popular">By popularity</option>
                    <option value="price-asc">Ascending price</option>
                    <option value="price-desc">By price descending</option>
                    <option value="new">By novelty</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`products-grid products-grid-modern ${viewMode}`}>
              <div className="no-products-modern">
                <div className="no-products-svg">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36" cy="36" r="24" fill="#e3eafd"/>
                    <circle cx="36" cy="36" r="18" fill="#1a5ae2" fillOpacity="0.15"/>
                    <circle cx="36" cy="36" r="12" fill="#1a5ae2" fillOpacity="0.25"/>
                    <circle cx="36" cy="36" r="7" fill="#1a5ae2"/>
                    <rect x="54" y="54" width="18" height="8" rx="4" transform="rotate(45 54 54)" fill="#7ecbff"/>
                  </svg>
                </div>
                <h2>Products coming soon</h2>
                <p className="no-products-subtitle">We are working on filling the catalog</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 