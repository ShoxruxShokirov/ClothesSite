import Image from "next/image"

export function StatisticsSection({ stats }) {
    return (
        <section className="about-icons">
            {stats.map((stat, index) => (
                <div key={index} className={`about-${stat.label.toLowerCase()}`}>
                    <Image 
                        src={stat.icon} 
                        alt={`${stat.label} icon`} 
                        width={100} 
                        height={100} 
                    />
                    <h3>{stat.value}</h3>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
} 