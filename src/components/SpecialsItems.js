import GreekSalad from '../assets/greekSalad.jpg';
import Bruchetta from '../assets/Bruchetta.jpg';
import lemonDessert from '../assets/lemonDessert.jpg';

var imageSrcList = {
    "Bruchetta": Bruchetta,
    "Lemon Cake": lemonDessert,
    "Greek Salad": GreekSalad
};

export default function SpecialsItems(params) {
    const imgSrc = imageSrcList[params.data.name];
    return (
        <>
            <div className="specialsItems">
                <div style={{ backgroundImage: `url(${imgSrc})` }} className="specialsImg" ></div>
                <div className="itemHead">
                    <h5>{params.data.name}</h5>
                    <h5 className="itemPrice">${params.data.price}</h5>
                </div>
                <div className="specialsDescription">
                    
                    <p className="itemDescription">{params.data.description}</p>
                </div>
                <h5 className="itemLink">Order delivery
                    <span className="material-symbols-outlined">directions_bike</span>
                </h5>
            </div>
        </>
    );
}