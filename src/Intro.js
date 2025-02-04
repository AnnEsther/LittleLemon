import introBg from './assets/introImg.jpg';

export default function Intro() {
    return (
        <div className="intro">
            <div className="introContent">
                <h1>Little lemon</h1>
                <h2>Chicago</h2>
                <h6>A family owned Mediterranean Restaurant, prominent in the Chicago Food scene with a focus on Traditional recipes with modern experience.</h6>
                <button className='styledButton'> Reserve a table</button>
                </div>
            <div className="introImage">
                <img className="introImg" src={introBg} ></img>
            </div>
        </div>
    );
}