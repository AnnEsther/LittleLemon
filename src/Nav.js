import logo from './assets/Logo.svg';
import { useNavigate } from "react-router-dom";


export default function Nav() {
     const navigate = useNavigate();
    return (
        <nav>
            <div className="navLogoDiv">
                <img className='navLogo' src={logo} alt="Logo"></img>
            </div>
            <div className='navLinks'>
                <ul>
                    <li><a onClick={()=>{navigate("/")}}>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a onClick={()=>{navigate("/booking")}}>Reservation</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}