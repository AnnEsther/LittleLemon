import introBg from './assets/introImg.jpg';

export default function Intro() {
    return (
        <div id="home" className="intro">
            <div className="introContent">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <h6>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h6>
                <button className='styledButton'> Reserve a table</button>
                </div>
            <div className="introImage">
                <img className="introImg" src={introBg} ></img>
            </div>
        </div>
    );
}