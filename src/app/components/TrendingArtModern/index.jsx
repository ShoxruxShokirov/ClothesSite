import React from "react";
import ItemModern from "./item";
import "../TrendingArt/style.scss";

// Пример данных (можно заменить на реальные props или API)
const exampleData = [
    // ... 8 объектов с полями name, price, authorName, image ...
];

function TrendingArtModern({ items = exampleData }) {
    // Гарантируем 8 карточек
    const cards = items.slice(0, 8);
    while (cards.length < 8) {
        cards.push({
            name: "Coming Soon",
            price: "-",
            authorName: "-",
            image: "https://via.placeholder.com/300x210?text=No+Image",
            isPlaceholder: true
        });
    }
    return (
        <div className="trending-art-wrapper">
            <div className="intro">
                <h1>New Arrivals</h1>
            </div>
            <div className="nft-items-wrapper">
                {cards.map((nft, idx) => (
                    <ItemModern
                        key={idx}
                        name={nft.name}
                        price={nft.price}
                        authorName={nft.authorName}
                        image={nft.image}
                        onCall={() => alert(`Call for ${nft.name}`)}
                        onMessage={() => alert(`Message for ${nft.name}`)}
                    />
                ))}
            </div>
        </div>
    );
}

export default TrendingArtModern; 