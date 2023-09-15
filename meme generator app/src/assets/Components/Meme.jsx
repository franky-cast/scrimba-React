import React from 'react'
import leo from '../img/leo-meme.png'

let randomNum
let memeImageUrl

function Meme () {

    // state for meme
    const [meme, setMeme] = React.useState(
        {
            topText:'',
            imgUrl: leo,
            bottomText: ''
        }
    )
    function updateMeme(){
        setMeme(prevState => ({...prevState, imgUrl: memeImageUrl}))
    }


    // async function for API call
    async function fetchMemeImg() {
        try {
            // making http request to Imgflip API
            const response = await fetch('https://api.imgflip.com/get_memes')
            const data = await response.json()
            const memesArray = data.data.memes

            // storing url of the object returned from API
            randomNum = Math.floor(Math.random() * memesArray.length)
            memeImageUrl = memesArray[randomNum].url

            // updates state
            updateMeme()

        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <main className="section--meme">
            <div className="form">

                <div className="input--wrap">
                    <input type='text' className="input" placeholder="Top text"></input>
                    <input type='text' className="input margin-right-auto" placeholder="Bottom text"></input>
                </div>

                <div className="btn-wrap">
                    <button className="button" onClick={fetchMemeImg}>Get a new meme image 📋</button>
                </div>

            </div>

            <div className="meme-container">
                <p className='top-text'>{meme.topText}</p>
                <img src={meme.imgUrl} alt="meme" className='meme'></img>
                <p className='bottom-text'>{meme.bottomText}</p>
            </div>

        </main>

    )
}

export default Meme