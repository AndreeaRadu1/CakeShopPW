import './popup.css';

function Modal(props) {
    return(
        <div className="modalPopup">
            <p>You need to login!</p>
            <button className="btnPopup btnPopup--alt" onClick={props.onLogin}>Login</button>
            <button className="btnPopup" onClick={props.onRegister}>Register</button>
        </div>
   );
}

export default Modal;