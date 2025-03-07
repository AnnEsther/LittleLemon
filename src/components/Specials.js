import SpecialsItems from "./SpecialsItems.js";
import { useNavigate } from "react-router";


var items = [
    {
        "name": "Greek Salad",
        "price": 12.99,
        "description": "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
    },
    {
        "name": "Bruchetta",
        "price": 5.99,
        "description": "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
    },
    {
        "name": "Lemon Cake",
        "price": 12.99,
        "description": "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined"
    }
];

export default function Specials() {
    const navigate = useNavigate();
    return (
        <div id="menu" className="specials">
            <div className="specialsHead">
                <h2>This weeks specials !</h2>
                <button className="styledButton" aria-label="Click for Online Menu" onClick={()=>{navigate("/construction")}}>Online Menu</button>
            </div>
            <div className="specialsContent">
                {items.map((item) => <SpecialsItems key={item.name} data={item} />)}
            </div>
        </div>
    );
}