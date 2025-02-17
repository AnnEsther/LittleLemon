import Intro from "./Intro.js";
import Specials from "./Specials.js";
import Testimonial from "./Testimonial.js";
import About from "./About.js";

export default function HomePage() {
    return (
        <>
            <div className="HomePage">
                <Intro />
                <Specials />
                <Testimonial />
                <About />
            </div>
        </>
    );
}
