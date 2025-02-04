import GreekSalad from './assets/greekSalad.jpg';
import Bruchetta from './assets/Bruchetta.jpg';
import lemonDessert from './assets/lemonDessert.jpg';


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
                    <h6>{params.data.name}</h6>
                    <h6 className="itemPrice">${params.data.price}</h6>
                </div>
                <div className="specialsDescription">
                    
                    <p className="itemDescription">{params.data.description}</p>
                </div>
                <h6 className="itemLink">Order delivery
                    <span class="material-symbols-outlined">directions_bike</span>
                </h6>
            </div>
        </>
    );
}