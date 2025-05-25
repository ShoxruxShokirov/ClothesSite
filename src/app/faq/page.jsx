"use client"

import Heading from "../components/Heading"
import { useState } from "react"
import "./style.scss"

function FAQ() {
    const [activeTab, setActiveTab] = useState("General");
    const [searchQuery, setSearchQuery] = useState("");
    const [openItems, setOpenItems] = useState({});

    const faqDataByCategory = {
        "General": {
            "What is an NFT marketplace?": "An NFT marketplace is a platform that allows users to buy, sell, and trade non-fungible tokens (NFTs). NFTs are unique digital assets that can represent anything from artwork and collectibles to in-game items and virtual real estate.",
            "How does buying an NFT work?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias, laudantium deleniti incidunt labore, at aspernatur harum beatae.",
            "How can I create an NFT?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias, laudantium deleniti incidunt labore, at aspernatur harum beatae.",
            "What is an NFT?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias, laudantium deleniti incidunt labore, at aspernatur harum beatae.",
        },
        "NFT Product": {
            "What are the benefits of owning an NFT?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias, laudantium deleniti incidunt labore, at aspernatur harum beatae.",
            "Are there any risks associated with buying NFTs?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias, laudantium deleniti incidunt labore.",
            "How to create an NFT?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit quia molestias.",
        },
        "Payment": {
            "What payment methods are accepted?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo.",
            "How are transaction fees calculated?": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, nemo. Similique ex reprehenderit.",
        }
    };

    const toggleItem = (index) => {
        setOpenItems(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const currentFaqData = faqDataByCategory[activeTab] || {};

    return (
        <div className="faq-page-wrapper">
            <div className="faq-content">
                <p>FAQ</p>
                <h1>Frequently asked questions</h1>
                <p>Here, you'll find answers to the most commonly asked questions about our products, services, and policies</p>

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search your ask"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="tabs">
                    {Object.keys(faqDataByCategory).map(tab => (
                        <button
                            key={tab}
                            className={activeTab === tab ? "active" : ""}
                            onClick={() => {
                                setActiveTab(tab);
                                setOpenItems({});
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="faq-items">
                    {Object.entries(currentFaqData).map(([question, answer], index) => (
                        <div key={index} className="faq-item">
                            <div className="question" onClick={() => toggleItem(index)}>
                                <h3>{question}</h3>
                                <span className="toggle">
                                    {openItems[index] ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-90deg-down" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor" className="bi bi-arrow-90deg-right" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z" />
                                        </svg>
                                    )}
                                </span>
                            </div>
                            {openItems[index] && answer && <div className="answer">{answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FAQ;