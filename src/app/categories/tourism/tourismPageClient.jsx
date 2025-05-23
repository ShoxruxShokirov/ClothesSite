"use client"

import { useState } from "react"
import "./style.scss"

export default function TourismPage() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState("grid")

  const subcategories = [
    { id: "all", name: "All Products" },
    { id: "tents", name: "Tents" },
    { id: "sleeping-bags", name: "Sleeping Bags" },
    { id: "backpacks", name: "Backpacks" },
    { id: "camping", name: "Camping" },
    { id: "navigation", name: "Navigation" },
    { id: "climbing", name: "Climbing Equipment" }
  ]

  const brands = [
    "The North Face", "Salomon", "Mammut", "Black Diamond", "Osprey", "Deuter", "MSR", "Petzl"
  ]

  const features = [
    "New Arrivals", "Special Offers", "Best Sellers", "Sale"
  ]

  return (
    <main className="tourism-page">
      <div className="page-header">
        <div className="container">
          <div className="breadcrumbs">
            <a href="/">Home</a>
            <span>/</span>
            <span>Tourism</span>
          </div>
          <h1>Tourism</h1>
        </div>
      </div>

      <div className="container">
        <div className="category-layout">
          <aside className="filters-sidebar-modern">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-list">
                {subcategories.map((subcategory) => (
                  <label key={subcategory.id} className="filter-item-modern">
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
                  <label key={feature} className="filter-item-modern">
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
                  <label key={brand} className="filter-item-modern">
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
                  <input type="number" placeholder="From" />
                  <span>-</span>
                  <input type="number" placeholder="To" />
                </div>
              </div>
            </div>

            <button className="reset-filters-modern">Reset Filters</button>
          </aside>

          <div className="products-section">
            <div className="products-header">
              <div className="products-count">
                Found: <span>0 products</span>
              </div>
              <div className="products-controls">
                <div className="view-mode">
                  <button
                    className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                    onClick={() => setViewMode("grid")}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20">
                      <rect x="3" y="3" width="7" height="7" />
                      <rect x="14" y="3" width="7" height="7" />
                      <rect x="3" y="14" width="7" height="7" />
                      <rect x="14" y="14" width="7" height="7" />
                    </svg>
                  </button>
                  <button
                    className={`view-btn ${viewMode === "list" ? "active" : ""}`}
                    onClick={() => setViewMode("list")}
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
                    <option value="popular">By Popularity</option>
                    <option value="price-asc">By Price Ascending</option>
                    <option value="price-desc">By Price Descending</option>
                    <option value="new">By Newness</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={`products-grid ${viewMode}`}>
              <div className="no-products-modern">
                <div className="no-products-svg">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="36" cy="36" r="24" fill="#e3eafd" />
                    <circle cx="36" cy="36" r="18" fill="#1a5ae2" fillOpacity="0.15" />
                    <circle cx="36" cy="36" r="12" fill="#1a5ae2" fillOpacity="0.25" />
                    <circle cx="36" cy="36" r="7" fill="#1a5ae2" />
                    <rect x="54" y="54" width="18" height="8" rx="4" transform="rotate(45 54 54)" fill="#4a90e2" />
                  </svg>
                </div>
                <h2>Products will appear soon</h2>
                <p className="no-products-subtitle">We're working on populating the catalog</p>
                <a href="/" className="no-products-btn">Back to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
