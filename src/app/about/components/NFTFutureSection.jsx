import Image from "next/image"

export function NFTFutureSection({ image, title, description }) {
    return (
        <section className="about-content">
            <div className="about-content-image">
                <Image 
                    src={image} 
                    alt="Astronaut NFT illustration" 
                    width={500} 
                    height={500} 
                />
            </div>
            <div className="about-nft-represent">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    );
} 