import TrollFace from "../assets/trollface.png"


export default function Header(){
    return(
        <header className="header">
        <img src={TrollFace} alt="" className="header--img" />
        <h2 className="header--text">Meme Generator</h2>
        </header>
    )
}