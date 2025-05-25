'use client';
// npx json-server -w src/store/db.json -p 3001
import { useState } from "react";
import Carousel from "./components/Carousel";
import Image from "next/image";

const categories = [
  { name: 'Cycling', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', link: '/cycling' },
  { name: 'Tourism', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', link: '/tourism' },
  { name: 'Swimming', img: 'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=400&q=80', link: '/swimming' },
  { name: 'Winter sports', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80', link: '/winter-sports' },
  { name: 'Clothing', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', link: '/clothing' },
];

const products = [
  { name: 'Snowboard VOLOKER', price: '4,225,000 UZS', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80' },
  { name: 'Sweatshirt KOF1101/34', price: '405,000 UZS', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jacket ORION', price: '2,170,000 UZS', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { name: 'Overall MoMa', price: '4,225,000 UZS', img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80' },
  { name: 'Anorak DUBLIN', price: '2,585,000 UZS', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80' },
  { name: 'Jacket BAUHAUS', price: '2,890,000 UZS', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' },
];

export default function Home() {
  const [state, setState] = useState({
    theme: 'light',
    showModal: false,
  })

  function handleShowModal(e, bool) {
    setState({
      ...state,
      showModal: bool
    })
  }

  return (
    <main className="main-page-content">
      <Carousel />
      {/* Banner */}
      <section className="main-banner-section">
        <div>
          <h1 className="main-title">XIVV.SHOP</h1>
          <div className="main-description">
            Shop for sports, tourism and active recreation. Cycling, tourism, swimming, winter sports, clothing and much more!
          </div>
        </div>
      </section>
      {/* Categories */}
      <section className="main-categories-section">
        <h2 className="main-section-title">Categories</h2>
        <div className="main-categories-list">
          {categories.map(cat => (
            <a key={cat.name} href={cat.link} className="main-category-card">
              <img src={cat.img} alt={cat.name} className="main-category-img" />
              <div className="main-category-title">{cat.name}</div>
            </a>
          ))}
        </div>
      </section>
      {/* Products */}
      <section className="main-products-section">
        <h2 className="main-section-title">New offers</h2>
        <div className="main-products-list">
          {products.map(prod => (
            <div key={prod.name} className="main-product-card">
              <img src={prod.img} alt={prod.name} className="main-product-img" onError={e => {e.target.style.display='none'}} />
              <div className="main-product-title">{prod.name}</div>
              <div className="main-product-price">{prod.price}</div>
              <div className="main-product-actions">
                <a href="tel:+998772204348" className="main-product-call">Call</a>
                <a href="https://github.com/ShoxruxShokirov" className="main-product-message">Message</a>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Contacts */}
      <section className="main-contacts-section">
        <h2 className="main-section-title">Contacts</h2>
        <div className="main-contact-row"><b>Address:</b> Samarkand, Samarkand district, X.A.V, Zarafshon St. 160</div>
        <div className="main-contact-row"><b>Phone:</b> <a href="tel:+998772204348" className="main-contact-link">+998 77 220 43 48</a></div>
        <div className="main-contact-row"><b>Email:</b> <a href="https://github.com/ShoxruxShokirov" className="main-contact-link">ShoxruxShokirov</a></div>
        <div className="main-contact-row"><b>Working hours:</b> Mon-Sun 10:00-20:00</div>
      </section>
    </main>
  )
}