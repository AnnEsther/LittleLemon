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
                                <td>Home</td>
                                <td>Reservations</td>
                            </tr>
                            <tr>
                                <td>About</td>
                                <td>Order Online</td>
                            </tr>
                            <tr>
                                <td>Menu</td>
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
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>Phone</td>
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
                                <td>Facebook</td>
                            </tr>
                            <tr>
                                <td>Instagram</td>
                            </tr>
                            <tr>
                                <td>Youtube</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>

        </footer>
    );
}