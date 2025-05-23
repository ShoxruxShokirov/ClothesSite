import ProductCatalog from "../components/ProductCatalog";

export default function HomeCategoryPage() {
  return (
    <main style={{padding: '40px 5vw'}}>
      <h1 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: 32}}>Home</h1>
      <ProductCatalog category="home" />
    </main>
  );
} 