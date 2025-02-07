import { Route, Routes } from "react-router-dom"; import Intro from "./Intro";
import Specials from "./Specials";
import Testimonial from "./Testimonial";
import About from "./About";


export default function Main() {
    return (
        <main>
            <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
            </Routes>
        </main>
    );
}

function HomePage() {
    return (
        <>
            <Intro />
            <Specials />
            <Testimonial />
            <About />
        </>
    );
}

function BookingPage() {
    return (
        <>
            <h1>Under Construction!</h1>
        </>
    );
}