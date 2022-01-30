import Products from "./products";
import Product from "./product";
import data from "./shoe";

const steps = [
    {
        id: "0",
        message: "Hi, how can I help you today?",
        trigger: "1",
    },

    {
        id: "1",
        options: [
            { value: false, label: "Checkout Products", trigger: "2" },
            { value: true, label: "Buy", trigger: "2" },
        ],
    },
    {
        id: "2",
        component: <Products data={data} />,
        waitAction: true,
        trigger: ({ value, steps }) => {
            if (!value) {
                return "restart";
            } else {
                return "3";
            }
        },
    },
    {
        id: "3",
        component: <Product />,
        waitAction: true,
        trigger: "4",
    },
    {
        id: "4",
        options: [
            { value: 1, label: "Negotiate", trigger: "5" },
            { value: 2, label: "Proceed To Payment", trigger: "11" },
        ],
    },
    {
        id: "5",
        message: "How much is your budget?",
        trigger: "6",
    },
    {
        id: "6",
        user: true,
        validator: (value) => {
            if (isNaN(value)) {
                return "Please enter a valid price";
            } else {
                return true;
            }
        },
        trigger: ({ value, steps }) => {
            let diff = Number(localStorage.price) - Number(value);
            if (diff > 1000) {
                return "9";
            } else {
                return "agreed";
            }
        },
    },
    {
        id: "restart",
        options: [
            { value: false, label: "I am not interested", trigger: "not" },
            { value: true, label: "I would love to buy", trigger: "2" },
        ],
    },
    {
        id: "agreed",
        message: "Let's do it",
        trigger: "8",
    },
    {
        id: "8",
        options: [
            { value: 1, label: "Proceed to Pay", trigger: "11" },
            { value: 2, label: "Not interested", trigger: "11" },
        ],
    },
    {
        id: "9",
        message: "Sorry, we can not sell this product at the price",
        trigger: "1",
    },
    {
        id: "11",
        message:
            "Okay, thanks you for your time. We are working on payment integration",
        trigger: "start",
    },
    {
        id: "not",
        message: "Okay, thanks you for your time.",
        trigger: "start",
    },
    {
        id: "start",
        options: [{ value: 1, label: "Start Over", trigger: "0" }],
    },
];

export default steps;
