import logo_big from './assets/Logo_big.png';

export default function Footer() {
    return (
        <footer>
             <img src={logo_big} alt="Logo"></img>
             <section>
                <table>
                <thead>Navigation</thead>
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
                    <td>Order Online</td>
                </tr>
                </table>
             </section>

             <section>
             <table>
                <thead>Contact</thead>
                <tr>
                    <td>Address</td>
                </tr>
                <tr>
                    <td>Phone Number</td>
                </tr>
                </table>
             </section>

             <section>
             <table>
                <thead>Social Media</thead>
                <tr>
                    <td>Facebook</td>
                </tr>
                <tr>
                    <td>Instagram</td>
                </tr>
                <tr>
                    <td>Youtube</td>
                </tr>
                </table>
             </section>
        </footer>
    );
}