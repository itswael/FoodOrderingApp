import {createPortal} from "react-dom";
import {useEffect, useRef} from "react";

export default function Modal({children, open, className=''}){
    const dialog = useRef();
    useEffect(() => {
        const modal = dialog.current;
        if (open) {
            modal.showModal();
        }
        return () => modal.close(); // this will be executed when the useeffect loads again
    }, [open]);
    return createPortal(
        <dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
        document.getElementById("modal"))
}