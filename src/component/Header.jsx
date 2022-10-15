import TrollFace from "../assets/trollface.png"


export default function Header(){
    return(
        <header className="header">
        <img src={TrollFace} alt="" className="header--img" />
        <h2 className="header--text">Meme Generator</h2>
        <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}