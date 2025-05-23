"use client"

import "./style.scss";
import Image from "next/image";

function Wallet() {
    return (
        <div className="wallet-gallery">
            <div className="wallet-col">
                <Image 
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80" 
                    alt="Женская одежда"
                    width={500}
                    height={500}
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className="wallet-col">
                <Image 
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=500&q=80" 
                    alt="Мужская одежда"
                    width={500}
                    height={500}
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
            <div className="wallet-col">
                <Image 
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=500&q=80" 
                    alt="Аксессуары"
                    width={500}
                    height={500}
                    loading="lazy"
                    style={{
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }}
                />
            </div>
        </div>
    );
}

export default Wallet;