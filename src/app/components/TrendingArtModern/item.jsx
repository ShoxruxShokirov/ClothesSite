import React from "react";
import Image from "next/image";
import "../TrendingArt/style.scss";

function ItemModern(props) {
    return (
        <div className="nft-item-wrapper">
            <div className="nft-image-wrapper">
                <Image
                    src={props.image}
                    alt="NFT thumbnail"
                    width={400}
                    height={400}
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className="nft-inner-info">
                <h2>{props.name}</h2>
                <div className="details">
                    <div className="author">
                        <p className="name">🤖 {props.authorName}</p>
                    </div>
                    <div className="price">
                        <small className="text-muted">Current Bid</small>
                        <p className="current-bid">
                            ⭐{props.price} UZS
                        </p>
                    </div>
                </div>
            </div>
            <div className="nft-actions">
                <button className="modern-btn call" onClick={props.onCall}>Call</button>
                <button className="modern-btn message" onClick={props.onMessage}>Message</button>
            </div>
        </div>
    );
}

export default ItemModern; 