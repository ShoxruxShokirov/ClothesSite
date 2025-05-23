// There are 2 types of components:
// 1. Client components  =>  Компоненты, которые выполняются на клиентских устройствах
// 2. Server components  =>  Компоненты, которые выполняются на сервере
"use client"

import "./style.scss"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import trandingNfts from '@/store/db.json'


const nftData = trandingNfts.trandingNfts || []

// hook  ->  хуки, которые выполняются на клиентских устройствах
// state ->  состояние компонента (или же память)

function Searchbox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [debounceQuery, setDebounceQuery] = useState(query);
    const router = useRouter();

    const handleSelect = (id) => {
        router.push(`/nft/${id}`);
    };
    // Установка задержки для фильтрации
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebounceQuery(query);
        }, 500); // задержка 500 мс

        return () => clearTimeout(timeoutId); // очистка таймера при изменении query
    }, [query]);

    useEffect(() => {
        if (debounceQuery) {
            const filtered = nftData.filter((nft) =>
                nft.name.toLowerCase().includes(debounceQuery.toLowerCase())
            );
            setResults(filtered);
        } else {
            setResults([]);
        }
    }, [debounceQuery]);

    const handleInput = (e) => {
        setQuery(e.target.value);
    };


    return (
        <div className="search-wrapper">
            <div className="search-container">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input
                    type="search"
                    placeholder="Search"
                    className="search-input"
                    value={query}
                    onChange={handleInput}
                />
                {/* JSX syntax  =>  {...} */}


                {query.length > 0 && (
                    <ul className="suggestions-container">
                        {results.length > 0 ? (
                            results.map((item) => (
                                <Link href={`/nft/${item.id}`} key={item.id} legacyBehavior>
                                    <li className="suggestion-item">
                                        <img src={item.image} alt={item.name} />
                                        <span className="nft-name">{item.name}</span>
                                    </li>
                                </Link>
                            ))
                        ) : (
                            <li className="suggestion-item no-results">Ничего не найдено</li>
                        )}
                    </ul>
                )}



            </div>
        </div>

    );
}

export default Searchbox;