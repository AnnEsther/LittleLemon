import logo from '../assets/Logo.svg';
import { useNavigate } from "react-router";


export default function Nav() {
     const navigate = useNavigate();
    return (
        <nav>
            <div className="navLogoDiv">
                <img className='navLogo' src={logo} alt="Logo"></img>
            </div>
            <div className='navLinks'>
                <ul>
                    <li><a onClick={()=>{navigate("/")}} aria-label="Navigate to home page">Home</a></li>
                    <li><a href='#about' aria-label="Navigate to about section">About</a></li>
                    <li><a href='#menu' aria-label="Navigate to online menu">Menu</a></li>
                    <li><a onClick={()=>{navigate("/booking")}} aria-label="Navigate to reserve a table">Reservation</a></li>
                    <li><a onClick={()=>{navigate("/construction")}}  aria-label="Navigate to order online">Order Online</a></li>
                    <li><a onClick={()=>{navigate("/construction")}}  aria-label="Navigate to login">Login</a></li>
                </ul>
            </div>
        </nav>
    );
}