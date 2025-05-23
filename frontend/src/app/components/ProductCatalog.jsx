"use client";
import "./product-catalog.scss"
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import LoadingSpinner from "./LoadingSpinner";

const demoProducts = {
  women: [
    {
      id: 1,
      name: "Elegant Dress",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Classic Blouse",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Summer Skirt",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
    }
  ],
  men: [
    {
      id: 1,
      name: "Classic Shirt",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Business Suit",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Casual T-shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    }
  ],
  kidsbaby: [
    {
      id: 1,
      name: "Baby Romper",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1503457574465-494bba506e52?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Kids Jacket",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Cute Dress",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    }
  ],
  home: [
    {
      id: 1,
      name: "Cozy Armchair",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Modern Lamp",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1503389152951-9c3d0c6b7a5a?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Soft Blanket",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80"
    }
  ],
  shoes: [
    {
      id: 1,
      name: "Running Sneakers",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1517260911205-8a3b66e655a4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Elegant Heels",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Classic Loafers",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1519748771451-a94c596fad67?auto=format&fit=crop&w=400&q=80"
    }
  ],
  handbags: [
    {
      id: 1,
      name: "Leather Handbag",
      price: 119.99,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Fashion Sunglasses",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Silk Scarf",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
    }
  ],
  jewelry: [
    {
      id: 1,
      name: "Gold Necklace",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Silver Bracelet",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?auto=format&fit=crop&w=400&q=80"
    }
  ],
  sale: [
    {
      id: 1,
      name: "Sale Dress",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 2,
      name: "Discount Shoes",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1517260911205-8a3b66e655a4?auto=format&fit=crop&w=400&q=80"
    },
    {
      id: 3,
      name: "Promo Handbag",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80"
    }
  ],
  // Можно добавить другие категории позже
};

export function getDemoProducts() {
  return demoProducts;
}

function ProductImage({ src, alt }) {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="product-card-img">
      {isLoading && <LoadingSpinner size="small" />}
      <AnimatePresence>
        {!error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src={src} 
              alt={alt} 
              width={400}
              height={400}
              loading="lazy"
              onError={() => setError(true)}
              onLoadingComplete={() => setIsLoading(false)}
              style={{
                objectFit: 'cover',
                width: '100%',
                height: '100%'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {error && (
        <motion.div 
          className="product-card-img-placeholder"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="16" fill="#eaf0fa"/>
            <rect x="14" y="18" width="36" height="28" rx="6" fill="#f7faff"/>
            <circle cx="22" cy="26" r="4" fill="#7ecbff"/>
            <path d="M18 42L28 32L36 40L44 32L50 38V44H18V42Z" fill="#b3d8ff"/>
            <rect x="14" y="18" width="36" height="28" rx="6" stroke="#b3d8ff" strokeWidth="2"/>
          </svg>
        </motion.div>
      )}
    </div>
  );
}

export default function ProductCatalog({ category }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    // Имитация загрузки данных
    setTimeout(() => {
      setProducts(demoProducts[category] || []);
      setIsLoading(false);
    }, 500);
  }, [category]);

  if (isLoading) {
    return <LoadingSpinner size="large" />;
  }

  return (
    <motion.div 
      className="product-catalog-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence mode="wait">
        {products.map(product => (
          <motion.div
            key={product.id}
            className="product-card-modern"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <ProductImage src={product.image} alt={product.name} />
            <div className="product-card-name">{product.name}</div>
            <div className="product-card-price">${product.price}</div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
} 