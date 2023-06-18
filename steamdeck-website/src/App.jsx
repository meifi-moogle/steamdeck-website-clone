/* eslint-disable react/no-unescaped-entities */
import baldursGateVideo from "/deck-img-vid/baldurs-gate.mp4"
import niNoKuniVideo from "/deck-img-vid/ni-no-kuni.mp4"
import { useRef } from 'react'

function App() {

  const slideOne = useRef()
  const slideTwo = useRef()
  const slideThree = useRef()
  const slideFour = useRef()
  const slideFive = useRef()

  function handleClick(slideRef) {
    slideRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
  }

  return (
    <>

      <nav>
        <div className="logo">STEAM DECK</div>
        <div className="nav-items">
          <ul>
            <li>Hardware</li>
            <li>Software</li>
            <li>Deck Verified</li>
            <li>Dock</li>
            <li>FAQ</li>
            <li>Tech Specs</li>
            <li>News</li>
            <li><button>Buy now</button></li>
            <li><div className="languages"></div>a</li>
          </ul>
        </div>
      </nav>

      <section className="top-content">

        <div className="left-side-text">

          <h1>Welcome to your new home.</h1>
          <p>The all-new home screen is everything you love about Steam in one place.</p>

          <p>Home is where you’ll find all the things you need—dive back into a game whether you were playing it on Steam Deck™ or your PC, see what’s new in your library and the store, as well as what your friends are up to.</p>
        </div>
      </section>

      <section className="feature-stardew">

      </section>

      <section className="features-list-section">

        <div className="section-header">
          <h2>All the Steam features you would expect</h2>
          <img src="./deck-img-vid/steamdeck_steamlogo.png" alt="steam-logo" />
        </div>
        <div className="features">

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

      <section className="feature-baldurs-gate">

        <video className='videoTag' autoPlay loop muted>
          <source src={baldursGateVideo} type='video/mp4' />
          <img src="./deck-img-vid/baldurs-gate-cover.jpg" alt="Baldurs Gate Game Footage" />
        </video>

      </section>

      <section className="steam-library-section">

        <div className="text-container">
          <h1>Your Steam Library, anywhere</h1>
          <p>Once you have logged into Steam Deck, your entire Steam Library shows up, just like any other PC. You will be able to find your collections and favorites - exactly where you left them.</p>
        </div>
        <img src="./deck-img-vid/software_library_english.jpg" alt="" />
      </section>

      <section className="slide-presentation">
        <div className="media-scroller--with-groups snaps-inline">

          <div className="media-group" ref={slideOne}>
            <div className="slide-text">
              <h2>Steam just works on Deck.</h2>
              <p>No matter how you prefer to interact with Steam on Deck—<strong>thumbsticks, trackpad, touchscreen, or mouse and keyboard</strong>-it just works</p>
            </div>
            <img src="./deck-img-vid/software_ondeck.jpg" alt="Screenshot of the software" />
          </div>

          <div className="media-group" ref={slideTwo}>
            <div className="slide-text">
              <h2>You won't need directions.</h2>
              <p>Pull up the main menu with a press of the <b>Steam Button</b> to access the Library, Store, Community, etc.</p>
            </div>
            <img src="./deck-img-vid/software_nav.png" alt="Screenshot of the navigation menu" />
          </div>

          <div className="media-group" ref={slideThree}>
            <div className="slide-text">
              <h2>Important stuff is always available.</h2>
              <p><b>The Quick Access menu</b> is your dedicated source for notifications, friends, peripherals and important settings.</p>

              <p>Check your notifications, see what time it is, and message friends without leaving your game.</p>
            </div>
            <img src="./deck-img-vid/software_quickaccess.jpg" alt="Screenshot of the quick access menu" />
          </div>

          <div className="media-group" ref={slideFour}>
            <div className="slide-text">
              <h2>Find what you've been looking for.</h2>
              <p><b>Universal Search</b> pulls together results from your library, your friends list and even the Steam Store. Just tap on search and get typing using the all new virtual keyboard.</p>
            </div>
            <img src="./deck-img-vid/software_search.jpg" alt="Screenshot of the search menu" />
          </div>

          <div className="media-group" ref={slideFive}>
            <div className="slide-text">
              <h2>Keep your head in the game!</h2>
              <p>The <b>Steam Overlay</b> has been overhauled to give you access to more Steam features while your game is running.</p>
            </div>
            <img src="./deck-img-vid/software_gameplay.jpg" alt="Screenshot of Dead Cells in-game" />
          </div>

        </div>

        <button onClick={() => handleClick(slideOne)}>Go To 1</button>
        <button onClick={() => handleClick(slideTwo)}>Go To 2</button>
        <button onClick={() => handleClick(slideThree)}>Go To 3</button>
        <button onClick={() => handleClick(slideFour)}>Go To 4</button>
        <button onClick={() => handleClick(slideFive)}>Go To 5</button>
      </section>

      <section className="feature-ni-no-kuni">
        <video className='videoTag' autoPlay loop muted>
          <source src={niNoKuniVideo} type='video/mp4' />
          <img src="./deck-img-vid/ni-no-kuni-cover.jpg" alt="Ni No Kuni Game Footage" />
        </video>
      </section>

      <section className="operating-system">
        <h2>A new Steam operating system</h2>
        <p>On Steam Deck, your games run on a different operating system than the one on your desktop PC. It's a new version of SteamOS, built with Steam Deck in mind and optimized for a handheld gaming experience. It comes with Proton, a compatibility layer that makes it possible to run your games without any porting work needed from developers. For Deck, we're vastly improving Proton's game compatibility and support for anti-cheat solutions by working directly with the vendors.
          <span> “Hold on to your butts!”</span>
        </p>
      </section>

      <section className="buy-steamdeck">
        <div className="container">
          <h2>Get your hands on Deck!</h2>
          <button>Get yours
            <svg className="rightarrow" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M16.4091 8.48003L21.5024 13.5734L1.98242 13.5734L1.98242 18.0178H21.5024L16.4091 23.1111L19.5558 26.2578L30.018 15.7956L19.5558 5.33337L16.4091 8.48003Z"></path>
            </svg>
          </button>
          <div>Steam Deck is shipping now.</div>
        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-logo">
          <img src="./deck-img-vid/sdlogo14_050405_FFFFFF.jpeg" alt="steam-alternative-logo" />
        </div>
        <div className="container">
          <div className="footer-valve-svg">

            <a href="https://www.valvesoftware.com">
              <svg className="footer-valve-logo" width="132.2" height="37.6" viewBox="0 0 796 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M244.034 126.209H273.366L258.091 70.1113L244.034 126.209Z" fill="#ffffff"></path>
                <path d="M0.0161133 225.042H764.534V0H0.0161133V225.042ZM124.179 179.129H99.9818L60.4656 46.523H86.6212L112.124 146.619L136.974 46.523H164.392L124.179 179.129ZM287.379 179.129L278.458 145.966H238.942C238.942 145.966 232.065 172.644 230.673 178.476C222.708 179.085 203.255 178.476 203.255 178.476L240.856 46.523H276.543L314.144 179.129H287.379ZM455.628 179.129H374.028V46.523H400.14V156.803H455.585V179.129H455.628ZM551.242 179.129H527.654L487.485 46.523H514.293L539.796 145.357L564.646 46.523H591.411L551.242 179.129ZM701.691 63.757H666.004V82.8623H698.514V100.053H666.004V119.811H701.691V137.045H646.246V46.523H701.734V63.757H701.691Z" fill="#ffffff"></path>
                <path d="M782.986 0C790.167 0 795.868 5.83171 795.868 13.1431C795.868 20.5415 790.167 26.3297 782.899 26.3297C775.718 26.3297 769.887 20.5415 769.887 13.1431C769.887 5.83171 775.718 0 782.899 0H782.986ZM782.899 2.04545C777.111 2.04545 772.367 7.00676 772.367 13.1431C772.367 19.41 777.111 24.2842 782.943 24.2842C788.774 24.3277 793.431 19.41 793.431 13.1866C793.431 7.00673 788.774 2.04545 782.943 2.04545H782.899ZM780.462 20.7591H778.112V6.13635C779.331 5.96227 780.506 5.78818 782.246 5.78818C784.466 5.78818 785.946 6.2669 786.816 6.87618C787.686 7.52899 788.165 8.52993 788.165 9.92258C788.165 11.8375 786.86 13.0125 785.293 13.4913V13.6218C786.555 13.8829 787.469 15.0144 787.73 17.1904C788.078 19.4535 788.426 20.3239 788.687 20.8026H786.207C785.858 20.3239 785.51 18.9748 785.206 17.0599C784.858 15.1885 783.9 14.4922 782.029 14.4922H780.375V20.7591H780.462ZM780.462 12.6644H782.159C784.074 12.6644 785.728 11.968 785.728 10.1402C785.728 8.83459 784.77 7.57252 782.159 7.57252C781.419 7.57252 780.854 7.61604 780.462 7.70308V12.6644Z" fill="#ffffff"></path>
              </svg>
            </a>
          </div>
          <div className="footer-links-container">

            <div className="left-links">
              <div><a href="#">About Us</a></div>
              <div><a href="#">Jobs</a></div>
              <div><a href="#">Steam Partners</a></div>
              <div><a href="#">Publications</a></div>
              <div><a href="#">Steam</a></div>
            </div>

            <div className="right-links">
              <div><a href="#">Terms of Use</a></div>
              <div><a href="#">Privacy Policy</a></div>
              <div><a href="#">Security</a></div>
              <div><a href="#">Legal</a></div>
              <div><a href="#">Press Kit</a></div>
            </div>

          </div>

        </div>
      </footer>

      <footer className="footer-secondary">
        <div className="content disclaimer">
          <p>Product specifications are subject to change.</p>
        </div>
        <div className="content legal">
          <p>
            © 2022 Valve Corporation. All rights reserved. All trademarks property of their respective owners in the U.S. and other countries. Steam, the Steam logo, Steam Deck, and the Steam Deck logo are trademarks and/or registered trademarks of Valve Corporation in the U.S. and/or other countries.
          </p>
        </div>
      </footer>

    </>
  )
}

export default App
