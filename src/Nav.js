import logo from './assets/Logo.svg';


export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo"></img>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Menu</a></li>
                <li><a href='#'>Reservation</a></li>
                <li><a href='#'>Order Online</a></li>
                <li><a href='#'>Login</a></li>
            </ul>
        </nav>
    );
}