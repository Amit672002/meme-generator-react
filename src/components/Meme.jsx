import React from "react";

const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    const getMemeImage = () => {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prevMeme =>({
            ...prevMeme,
            randomImage: url
        }))
    }

    const handleText = (event) => {
        const {name, value} = event.target
        setMeme(prevState => ({
            ...prevState,
            [name]: value
        }))
    } 

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleText}
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleText}
                />
                <button className="form--button" onClick={getMemeImage}>Get a new Meme Image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme