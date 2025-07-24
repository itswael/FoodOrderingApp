import Modal from "./UI/Modal.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import {currencyFormatter} from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)
    const cartTotal = cartCtx.items.reduce((totalPrice, item) => totalPrice+ item.quantity * item.price, 0);
    
    function handleClose(){
        userProgressCtx.hideCheckout();
    }
    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
        <form>
            <h2>Checkout</h2>
            <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
            <Input label={"Full name"} type={"text"} id={"full-name"}/>
            <Input label={"Email"} type={"email"} id={"email"}/>
            <Input label={"Phone"} type={"text"} id={"phone"}/>
            <Input label={"Street"} type={"text"} id={"street"}/>
            <div className={"control-row"}>
                <Input label={"Postal code"} type={"number"} id={"postal-code"}/>
                <Input label={"City"} type={"text"} id={"city"}/>
            </div>
            <p className={"modal-actions"}>
                <Button type={"button"} onClick={handleClose} textOnly>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
}