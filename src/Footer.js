import logo_big from './assets/Logo_big.png';

export default function Footer() {
    return (
        <footer>
            <div className='footerlogoDiv'>
                <img className='footerLogo' src={logo_big} alt="Logo"></img>
            </div>
            <div className='footerContentDiv'>
                <section className="navigation">
                    <table>
                        <thead>
                            <tr><td>Navigation</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a href="#home">Home</a></td>
                                <td><a>Reservations</a></td>
                            </tr>
                            <tr>
                                <td><a href="#about">About</a></td>
                                <td><a>Order Online</a></td>
                            </tr>
                            <tr>
                                <td><a href="#menu">Menu</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="contact">
                    <table>
                        <thead>
                            <tr><td>Contact</td></tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Address</a></td>
                            </tr>
                            <tr>
                                <td><a>Phone</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section className="socialMedia">
                    <table>
                        <thead>
                            <tr>
                                <td>Social Media</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><a>Facebook</a></td>
                            </tr>
                            <tr>
                                <td><a>Instagram</a></td>
                            </tr>
                            <tr>
                                <td><a>Youtube</a></td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

        </footer>
    );
}