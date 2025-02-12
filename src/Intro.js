import introBg from './assets/introImg.jpg';
import { useNavigate } from "react-router-dom";


export default function Intro() {

    const navigate = useNavigate();

    return (
        <div id="home" className="intro">
            <div className="introContent">
                <h1 className="introHeading">Little Lemon</h1>
                <h2 className="introSubHeading">Chicago</h2>
                <h6 className="introPara">We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.</h6>
                    <div className="introButtonDiv">
                        <button className='styledButton' onClick={()=>{navigate("/booking");}}> Reserve a table</button>
                    </div>
                </div>
            <div className="introImage">
                <img className="introImg" src={introBg} ></img>
            </div>
        </div>
    );
}