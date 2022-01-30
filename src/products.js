import React, { useEffect } from "react";

const Products = ({ previousStep, data, triggerNextStep, step, steps }) => {
    const nextStep = (_i) => {
        step.value = data[_i];
        triggerNextStep();
    };

    useEffect(() => {
        if (!previousStep.value) {
            step.value = false;
            triggerNextStep();
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="products">
            {data.map((item, index) => {
                return (
                    <div key={item.id} className="product">
                        <p>{item.name}</p>
                        <img src={item.url} alt="logo" />
                        <span>${item.price}</span>
                        {previousStep.value && (
                            <button
                                onClick={() => {
                                    nextStep(index);
                                }}
                            >
                                Buy
                            </button>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Products;
