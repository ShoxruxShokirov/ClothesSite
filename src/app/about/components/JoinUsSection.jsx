export function JoinUsSection({ onJoinClick }) {
    return (
        <section className="about-nft-join">
            <div className="about-nft-join-content">
                <h2>Interested in joining us?</h2>
                <p>We're always looking for passionate individuals to help us achieve our goals. Apply today and let's build a better future together.</p>
                <button 
                    className="about-nft-join-button" 
                    onClick={onJoinClick} 
                    aria-label="Open join us form"
                >
                    Join Us
                </button>
            </div>
        </section>
    );
} 