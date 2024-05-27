import { useContext } from "react";
import { AssestContext } from "../GrandPa/GrandPa";

const Special = ({asset}) => {
    const gift = useContext(AssestContext)
    return (
        <div>
            <h2>Special</h2>
            <p>Has : {asset}</p>
            <p>Also has : {gift}</p>
        </div>
    );
};

export default Special;