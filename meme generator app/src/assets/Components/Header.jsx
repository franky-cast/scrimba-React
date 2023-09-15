import troll from '../img/troll-face.png'

function Header () {
    return (
        <div className="header">
            <div className='d-flex gap-2em'>
                <img src={troll} alt="troll face" className='troll'></img>
                <h2 className='header--title'>Meme Generator</h2>
            </div>
            <p className='header--project'>React Course - Project 3</p>
        </div>
    )
}

export default Header