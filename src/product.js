import React, { useEffect } from "react";

const Product = ({ previousStep, triggerNextStep }) => {
    console.log(previousStep);
    localStorage.setItem("price", previousStep.value.price);
    useEffect(() => {
        triggerNextStep();
        // eslint-disable-next-line
    }, []);

    return (
        <div key={previousStep.value.id} className="product">
            <h3 className="text-center">
                You selected {previousStep.value.name}{" "}
            </h3>
            <p>{previousStep.value.name}</p>
            <img src={previousStep.value.url} alt="logo" />
            <span>${previousStep.value.price}</span>
            <span>Available Size: {previousStep.value.size}</span>
            <span>Color: {previousStep.value.color}</span>
            <span>Description: {previousStep.value.description}</span>
            <span>Brand: {previousStep.value.brand}</span>
            {/* <button onClick={nextStep}>Buy</button> */}
        </div>
    );
};

export default Product;
