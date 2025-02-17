import MarioAdrian from '../assets/Mario and Adrian b.jpg';
import Adrian from '../assets/restaurant chef B.jpg';

export default function About() {
    // useEffect(() => {
    //     const updateImg = setInterval(() => {
    //       setCount(prevCount => prevCount + 1);
    //     }, 5000); // 1000 milliseconds (1 second)
    
    //     return () => clearInterval(updateImg); // Cleanup on unmount
    //   }, []); 

    return (
        <div id="about" className="about">
            <h2>About</h2>
            <div className="aboutContent">
                <h5>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</h5>
                <div className="aboutImageDiv">
                    <img className="aboutImgOne" src={Adrian}></img>
                    <img className="aboutImgTwo" src={MarioAdrian}></img>
                </div>
            </div>
        </div>
    );
}