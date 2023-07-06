/* eslint-disable react/no-unescaped-entities */
import baldursGateVideo from "/deck-img-vid/baldurs-gate.mp4";
import niNoKuniVideo from "/deck-img-vid/ni-no-kuni.mp4";
import Nav from "./Nav";
import TopSection from "./TopSection";
import SteamFeatures from "./SteamFeatures";
import Library from "./Library";
import HorizontalScroll from "./SoftwareSection";
import Footer from "./Footer";

import "./nav.css"
import "./top-content.css"
import "./steam-features.css"
import "./library.css"
import "./software-section.css"
import "./software-scroll.css"
import "./operating-system.css"
import "./get-deck.css"
import "./footer.css"

import "./color-animation.css"
import "./typography.css"
import "./backgrounds.css"
import "./buttons.css"




function App() {

  return (
    <>
      < Nav />

      < TopSection />

      <section className="feature-stardew"></section>

      < SteamFeatures />

      <section className="feature-baldurs-gate">

        <video className='videoTag' autoPlay loop muted>
          <source src={baldursGateVideo} type='video/mp4' />
          <img src="./deck-img-vid/baldurs-gate-cover.jpg" alt="Baldurs Gate Game Footage" />
        </video>
      </section>

      < Library id="library" />

      < HorizontalScroll id="software" />

      <section className="feature-ni-no-kuni">
        <video className='videoTag' autoPlay loop muted>
          <source src={niNoKuniVideo} type='video/mp4' />
          <img src="./deck-img-vid/ni-no-kuni-cover.jpg" alt="Ni No Kuni Game Footage" />
        </video>
      </section>

      <section className="operating-system" id="operating-system">
        <h2>A new Steam operating system</h2>
        <p>On Steam Deck, your games run on a different operating system than the one on your desktop PC. It's a new version of SteamOS, built with Steam Deck in mind and optimized for a handheld gaming experience. It comes with Proton, a compatibility layer that makes it possible to run your games without any porting work needed from developers. For Deck, we're vastly improving Proton's game compatibility and support for anti-cheat solutions by working directly with the vendors.
          <span>“Hold on to your butts!”</span>
        </p>
      </section>

      <section className="buy-steamdeck animated-background">
        <div className="get-deck-container">
          <div className="inline-container">Get your hands on Deck!

            <button>Get yours
              <svg className="rightarrow" width="21" height="21" viewBox="0 0 32 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"></path>
              </svg>
            </button>
            
          </div>
          <p>Steam Deck is shipping now.</p>
        </div>
      </section>

      < Footer />
    </>
  )
}

export default App
