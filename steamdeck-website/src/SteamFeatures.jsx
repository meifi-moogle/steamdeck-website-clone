/* eslint-disable react/no-unescaped-entities */
function SteamFeatures() {
    return (
        <>
            <section className="features-list-section" id="steam-features">

                <div className="section-header">
                    <h2 className="section-title">All the Steam features you'd expect</h2>
                    <img src="./deck-img-vid/steamdeck_steamlogo.png" alt="steam-logo" />
                </div>
                
                <div className="features margin-inline">

                    <div className="feature">
                        <h3>Steam Chat</h3>
                        <p>Your friends are all here—access Steam Chat at the push of a button.</p>
                    </div>

                    <div className="feature">
                        <h3>Notifications</h3>
                        <p>All notifications are now in one place, so you can check-in without leaving your game.</p>
                    </div>

                    <div className="feature">
                        <h3>Cloud Saves</h3>
                        <p>Start playing on a PC and pick up right where you left off on Deck or vice versa.</p>
                    </div>

                    <div className="feature">
                        <h3>Remote Play</h3>
                        <p>Stream games from your home PC directly to your Deck no matter where you are.</p>
                    </div>

                    <div className="feature">
                        <h3>Store</h3>
                        <p>The entire Steam Store experience is accessible from Deck.</p>
                    </div>

                    <div className="feature">
                        <h3>Community</h3>
                        <p>Keep up to date with friends, news, and all the latest activity from Steam.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default SteamFeatures