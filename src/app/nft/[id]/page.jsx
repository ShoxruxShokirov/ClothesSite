'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import './style.scss'

const API_URL = 'http://localhost:3001'

export default function NFTPage() {
    const params = useParams()
    const [nft, setNft] = useState(null)

    useEffect(() => {
        const fetchNFT = async () => {
            try {
                const response = await fetch(`${API_URL}/trandingNfts/${params.id}`)
                if (!response.ok) throw new Error('NFT not found')
                const data = await response.json()
                setNft(data)
            } catch (error) {
                console.error('Error:', error)
            }
        }

        if (params.id) {
            fetchNFT()
        }
    }, [params.id])

    if (!nft) return <div>Loading...</div>

    return (
        <div className="nft-details-page">
            <div className="nft-details-container">
                <div className="nft-image">
                    <img src={nft.image} alt={nft.name} />
                </div>
                <div className="nft-info">
                    <h1>{nft.name}</h1>
                    <div className="author">
                        <p>Created by</p>
                        <h3>🤖 {nft.authorName}</h3>
                    </div>
                    <div className="price">
                        <p>Current Bid</p>
                        <h2>⭐ {nft.price}</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}