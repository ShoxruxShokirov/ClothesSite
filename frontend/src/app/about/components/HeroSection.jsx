import Image from "next/image"
import { useState } from "react"

export function HeroSection({ image, title, description }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <section className="about-page-wrapper">
            <div className="about-page-content">
                <span className="section-label">NFT MARKETPLACE</span>
                <h1>{title}</h1>
                <p className="about-page-description">{description}</p>
            </div>
            <div className="about-image">
                <Image 
                    src={image} 
                    alt="NFT Distro company illustration" 
                    width={500} 
                    height={500} 
                    priority 
                    onLoadingComplete={() => setIsLoading(false)}
                    className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                />
                {isLoading && (
                    <div className="image-loading-placeholder">
                        <div className="loading-spinner"></div>
                    </div>
                )}
            </div>
        </section>
    );
} 