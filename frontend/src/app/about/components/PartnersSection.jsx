import Image from "next/image"

export function PartnersSection({ logos }) {
    return (
        <section className="about-partners">
            <h2>Our Partners</h2>
            <div className="about-partners-icon">
                {logos.map((logo, index) => (
                    <Image 
                        key={index}
                        src={logo.src} 
                        alt={logo.alt} 
                        width={120} 
                        height={40} 
                    />
                ))}
            </div>
        </section>
    );
} 