import Image from "next/image"

export function TeamSection({ teamData, images }) {
    const getUnsplashImage = (index) => {
        return `https://images.unsplash.com/${images[index % images.length]}?w=180&h=170&fit=crop`;
    };

    return (
        <section className="about-nft-team">
            <h2>Our Team</h2>
            <div className="about-nft-team-image">
                {teamData.map((member, index) => (
                    <div key={member.id} className={`team${member.id}`}>
                        <Image 
                            src={getUnsplashImage(index)} 
                            alt={member.name} 
                            width={180} 
                            height={170}
                            className="team-member-image"
                        />
                        <h3>{member.name}</h3>
                        <p className="about-nft-team-position">{member.position}</p>
                    </div>
                ))}
            </div>
        </section>
    );
} 