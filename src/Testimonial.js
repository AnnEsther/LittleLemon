import Reese from './assets/Reese.jpg';
import Malcom from './assets/malcom.jpg';
import Dewie from './assets/Dewie.jpg';


var imageSrcList = {
    "Reese": Reese,
    "Malcom": Malcom,
    "Dewie": Dewie
};

var items = [
    {
        "name": "Reese",
        "image": "",
        "rating": 4.5,
        "testimony": "The pasta dish was flavorful and hearty, and the portion size was generous."
    },
    {
        "name": "Malcom",
        "image": "",
        "rating": 5.0,
        "testimony": "The  Bruschetta was out of this world. I can't wait to go back."
    },
    {
        "name": "Dewie",
        "image": "",
        "rating": 4.0,
        "testimony": "This is my most favorite dessert. Nothing can beat the citrusy delight."
    }
];


export default function Testimonial() {
    return (
        <div className="testimonial">
            <h2>Testimonials</h2>
            <div className="testimonialContent">
                {items.map((item) => <TestimonialItem key={item.name} data={item} />)}
            </div>
        </div>
    );
}

function RatingVisual(params){
    var filledStars = params.data.rating;
    var hasHalfStar = (Number(filledStars) === filledStars && filledStars % 1 !== 0);
    if(hasHalfStar){
        return (
            <>
                <div className='material-symbols-outlined' style={{"font-variation-settings" : "'FILL' 0, 'wght' 700, 'GRAD' 0, 'opsz' 48"}} key={params.data.name+"half-star"} >star_half</div>
            </>
        );
    }
    else{
        return (
            <>
            <div className='material-symbols-outlined' style={{"font-variation-settings" : "'FILL' 1, 'wght' 700, 'GRAD' 0, 'opsz' 48"}} key={params.data.name+"star"} >star</div>
            </>
        );
    }
}

function TestimonialItem(params) {
    const imgSrc = imageSrcList[params.data.name];
    return (
        <div className="testimonialItem">
            <div className='testimonialHead'>
            <div className="customerInfo">
                <div className="customerImage" style={{ backgroundImage: `url(${imgSrc})` }}></div>
                <h5 className="customerName">{params.data.name}</h5>
            </div>
            <div className="customerRating">
                <h5>{params.data.rating}</h5>
                <RatingVisual data={params.data}/>
            </div>
            </div>
            <h6 className="customerTestimonial">
                "{params.data.testimony}"
            </h6>
        </div>
    );
}

