import ProductCatalog from "../components/ProductCatalog";

export const dynamic = "force-static";

export default function JewelryPage() {
  return (
    <main style={{padding: '40px 5vw'}}>
      <h1 style={{fontSize: '2.2rem', fontWeight: 700, marginBottom: 32}}>Jewelry</h1>
      <ProductCatalog category="jewelry" />
    </main>
  );
} 