import DeckLogoSvg from "./DeckLogoSvg"

// import DeckLogoSvg from "./DeckLogoSvg"
function Nav() {

    return (
        <>
            <nav>
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
            </nav>
        </>
    )
}

export default Nav