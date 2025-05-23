import { getDemoProducts } from "./ProductCatalog";

export default function ProductPage({ category, id }) {
  const demoProducts = getDemoProducts();
  const product = (demoProducts[category] || []).find(p => String(p.id) === String(id));
  if (!product) return <div style={{padding: 40}}>Товар не найден</div>;
  return (
    <main style={{padding: '40px 5vw', display: 'flex', gap: 40, alignItems: 'flex-start'}}>
      <img src={product.image} alt={product.name} style={{width: 340, height: 340, objectFit: 'cover', borderRadius: 16, boxShadow: '0 2px 16px #0001'}} />
      <div>
        <h1 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: 16}}>{product.name}</h1>
        <div style={{color: '#e21a2c', fontWeight: 700, fontSize: '1.5rem', marginBottom: 24}}>${product.price}</div>
        <div style={{marginBottom: 32, color: '#444'}}>Описание товара (можно добавить подробнее позже)</div>
        <button style={{background: '#e21a2c', color: '#fff', border: 'none', borderRadius: 8, padding: '12px 32px', fontWeight: 600, fontSize: '1.1rem', cursor: 'pointer'}}>Добавить в корзину</button>
      </div>
    </main>
  );
} 