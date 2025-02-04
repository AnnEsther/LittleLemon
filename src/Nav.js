import logo from './assets/Logo.svg';


export default function Nav() {
    return (
        <nav>
            <div className="navLogoDiv">
                <img className='navLogo' src={logo} alt="Logo"></img>
            </div>
            <div className='navLinks'>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#menu'>Menu</a></li>
                    <li><a href='#'>Reservation</a></li>
                    <li><a href='#'>Order Online</a></li>
                    <li><a href='#'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}