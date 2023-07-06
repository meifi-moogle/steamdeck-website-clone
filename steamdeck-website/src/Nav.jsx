import DeckLogoSvg from "./DeckLogoSvg"

// import DeckLogoSvg from "./DeckLogoSvg"
function Nav() {

    return (
        <>
            <nav>

                {/* <div className="flex-group"> */}

                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" viewBox="0 0 24 24"><path fill="currentColor" d="M8.999 0v4.309c4.242 0 7.694 3.45 7.694 7.691s-3.452 7.691-7.694 7.691V24c6.617 0 12-5.383 12-12s-5.383-12-12-12Zm0 6.011c-3.313 0-6 2.687-5.998 
                    6a5.999 5.999 0 1 0 5.998-6z"/>
                    </svg> */}
                    {/* < DeckLogoSvg /> */}
                    {/* <span className="logo-title">STEAM <b>DECK</b></span> */}
                {/* </div> */}

                {/* <div className="logo">STEAM DECK</div> */}

                < DeckLogoSvg />

                <div className="nav-items">

                    <a href="#steam-features" className="btn">Features</a>
                    <a href="#library" className="btn">Library</a>
                    <a href="#software" className="btn">Software</a>
                    <a href="#operating-system" className="btn">SteamOS</a>
                    <a href="#footer" className="btn">About Us</a>

                    <a href="#" className="btn btn-still">Buy now</a>
                    <div className="languages"></div>

                </div>

                {/* <ul>
                        <li><button onClick={console.log('feat')}>feat</button></li>
                        <li><button onClick={console.log('library')}>library</button></li>
                        <li><button onClick={console.log('software')}>software</button></li>
                        <li><button onClick={console.log('steamos')}>steamos</button></li>
                        <li><button onClick={console.log('footer')}>footer</button></li>
                    </ul> */}

            </nav>
        </>
    )
}

export default Nav