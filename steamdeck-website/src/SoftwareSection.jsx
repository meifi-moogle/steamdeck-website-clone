/* eslint-disable react/no-unescaped-entities */
import { useRef } from 'react'

function HorizontalScroll() {

    const slideOne = useRef()
    const slideTwo = useRef()
    const slideThree = useRef()
    const slideFour = useRef()
    const slideFive = useRef()

    function handleClick(slideRef) {
        slideRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" })
    }

    return (
        <div id="software">
            <section className="slide-presentation">
                <div className="media-scroller--with-groups snaps-inline">

                    <div className="media-group" ref={slideOne}>
                        <div className="slide-text">
                            <h2>Steam just works on Deck.</h2>
                            <p>No matter how you prefer to interact with Steam on Deck—<b>thumbsticks, trackpad, touchscreen, or mouse and keyboard</b>—it just works.</p>
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
                            <p className='top-paragraph'><b>The Quick Access menu</b> is your dedicated source for notifications, friends, peripherals and important settings.</p>

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
                <div className="btn-container">
                <a onClick={() => handleClick(slideOne)} className="btn btn-big">Steam on Deck</a>
                <a onClick={() => handleClick(slideTwo)} className="btn btn-big">Navigation</a>
                <a onClick={() => handleClick(slideThree)} className="btn btn-big">Quick Access</a>
                <a onClick={() => handleClick(slideFour)} className="btn btn-big">Search</a>
                <a onClick={() => handleClick(slideFive)} className=" btn btn-big">Gameplay</a>
                </div>
            </section>
        </div>
    )
}

export default HorizontalScroll