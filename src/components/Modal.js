import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';
import '../css/Modal.css';

const Modal = (props) => {
    return ReactDOM.createPortal(
        <div onClick={() => props.onDismiss()} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <div className="container">
                    <div className="container__title">
                        <span className="container__title--main">Click for nutritional values</span>
                        <span className="container__title--icon"><i class="search icon"></i></span>
                    </div>
                    <div className="container__content">{props.content}</div>
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;