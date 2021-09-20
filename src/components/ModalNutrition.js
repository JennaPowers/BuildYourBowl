import React from 'react';
import ReactDOM from 'react-dom';
import '../css/ModalNutrition.css';

const ModalNutrition = (props) => {
    return ReactDOM.createPortal(
        <div onClick={() => props.onDismiss()} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui modal active change">
                <div className="nutrition-card__content">{props.content}</div>
            </div>
        </div>
        ,document.querySelector('#modalnut')
    );
};

export default ModalNutrition;