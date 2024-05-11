import classes from './Modal.module.css';
// By default react doesn't know where the Rapped Mustom Modal should be applied
// We use the props.children to apply it
function Modal({children}) { 
    // return a fragmant with a div and a dialog that will host the actual Modal contant
    // the div will be used to make the backdrop of the modal
    // props.children = {children}
    return <> 

    {/* backdrop and modal are both css class that are defined in the css file */}
    <div className = {classes.backdrop}/>  
    {/* the open tag is required by the dialog componant to make it visible */}
    <dialog open className = {classes.modal}> 
         {children}
    </dialog> 
    </>
}

export default Modal;