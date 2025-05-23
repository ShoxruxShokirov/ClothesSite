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
    "The North Face",
    "Salomon",
    "Mammut",
    "Black Diamond",
    "Osprey",
    "Deuter",
    "MSR",
    "Petzl"
  ]

  const features = [
    "New Arrivals",
    "Special Offers",
    "Best Sellers",
    "Sale"
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

            <button className="reset-filters-modern">
              Reset Filters
            </button>
          </aside>

          <div className="products-section">
            <div className="products-header">
              <div className="products-count">
                Found: <span>0 products</span>
              </div>
              <div className="products-controls">
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
                    <circle cx="36" cy="36" r="24" fill="#e3eafd"/>
                    <circle cx="36" cy="36" r="18" fill="#1a5ae2" fillOpacity="0.15"/>
                    <circle cx="36" cy="36" r="12" fill="#1a5ae2" fillOpacity="0.25"/>
                    <circle cx="36" cy="36" r="7" fill="#1a5ae2"/>
                    <rect x="54" y="54" width="18" height="8" rx="4" transform="rotate(45 54 54)" fill="#4a90e2"/>
                  </svg>
                </div>
                <h2>Products will appear soon</h2>
                <p className="no-products-subtitle">We're working on populating the catalog</p>
                <a href="/" className="no-products-btn">На главную</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .no-products-modern {
          background: #fff;
          border-radius: 24px;
          box-shadow: 0 4px 32px 0 rgba(26,90,226,0.08);
          padding: 48px 32px 40px 32px;
          max-width: 420px;
          margin: 48px auto 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
        }
        .no-products-svg {
          margin-bottom: 24px;
          animation: swing 2.5s infinite cubic-bezier(.4,0,.2,1);
        }
        .no-products-modern h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #1a5ae2;
          margin-bottom: 10px;
          text-align: center;
        }
        .no-products-subtitle {
          color: #666;
          font-size: 1.08rem;
          margin-bottom: 24px;
          text-align: center;
        }
        .no-products-btn {
          display: inline-block;
          background: linear-gradient(90deg, #1a5ae2 60%, #4a90e2 100%);
          color: #fff;
          font-weight: 600;
          border-radius: 8px;
          padding: 10px 28px;
          text-decoration: none;
          font-size: 1.08rem;
          box-shadow: 0 2px 8px #1a5ae222;
          transition: background 0.2s, transform 0.2s;
        }
        .no-products-btn:hover {
          background: linear-gradient(90deg, #4a90e2 60%, #1a5ae2 100%);
          transform: translateY(-2px) scale(1.04);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        @keyframes swing {
          0% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
          100% { transform: rotate(-6deg); }
        }
        .filters-sidebar-modern {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px 0 rgba(26,90,226,0.08);
          padding: 32px 20px 24px 20px;
          min-width: 260px;
          max-width: 320px;
          margin-right: 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .filter-section h3 {
          font-size: 1.13rem;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a5ae2;
          letter-spacing: 0.5px;
        }
        .filter-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .filter-item-modern {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.05rem;
          font-weight: 500;
          cursor: pointer;
          padding: 6px 0;
          border-radius: 6px;
          transition: background 0.18s;
        }
        .filter-item-modern:hover {
          background: #f2f6ff;
        }
        .filter-item-modern input[type="radio"],
        .filter-item-modern input[type="checkbox"] {
          accent-color: #1a5ae2;
          width: 18px;
          height: 18px;
          margin-right: 2px;
          transition: box-shadow 0.2s;
        }
        .filter-item-modern input[type="radio"]:focus,
        .filter-item-modern input[type="checkbox"]:focus {
          box-shadow: 0 0 0 2px #4a90e2;
        }
        .price-range {
          margin-top: 8px;
          margin-bottom: 8px;
        }
        .price-range input[type="range"] {
          width: 100%;
          accent-color: #1a5ae2;
        }
        .price-inputs {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 8px;
        }
        .price-inputs input[type="number"] {
          width: 60px;
          border: 1px solid #e3eafd;
          border-radius: 6px;
          padding: 4px 6px;
          font-size: 1rem;
        }
        .reset-filters-modern {
          margin-top: 18px;
          background: linear-gradient(90deg, #1a5ae2 60%, #4a90e2 100%);
          color: #fff;
          font-weight: 600;
          border: none;
          border-radius: 8px;
          padding: 10px 0;
          font-size: 1.08rem;
          box-shadow: 0 2px 8px #1a5ae222;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }
        .reset-filters-modern:hover {
          background: linear-gradient(90deg, #4a90e2 60%, #1a5ae2 100%);
          transform: translateY(-2px) scale(1.03);
        }
        @media (max-width: 900px) {
          .filters-sidebar-modern {
            min-width: 0;
            max-width: 100vw;
            margin-right: 0;
            padding: 18px 6px 18px 6px;
          }
        }
        @media (max-width: 600px) {
          .no-products-modern {
            padding: 32px 10px 28px 10px;
            max-width: 98vw;
          }
          .no-products-svg {
            margin-bottom: 18px;
          }
        }
      `}</style>
    </main>
  )
} 