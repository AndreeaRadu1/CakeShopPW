import './popup.css';

function Backdrop(props) {
    return <div className="backdropPopup" onClick={props.onCancel} /> 
}

export default Backdrop;