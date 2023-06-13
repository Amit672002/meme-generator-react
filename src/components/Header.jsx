import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img 
                src="images/troll-face.png"
                className="header--image"
                alt="meme-icon"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Time for some Memes</h4>
        </header>
    )
}

export default Header