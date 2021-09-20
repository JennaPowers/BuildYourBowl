import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import history from '../history';
import '../css/SelectedTopping.css';
import { getId, addToBowl } from '../actions';

class SelectedTopping extends React.Component {
    renderSelectedToppings() {
        return this.props.selectedTopping.map((item) => {
            return(
                <Link to="/ShowNutrition">
                    <div className="ui middle aligned selection list">
                        <div className="item">
                            <div onClick={() => this.props.getId(item)} className="item__name">{item.name}</div>
                            <div className="item__button">
                                <div onClick={(event) => this.onPlusButtonClick(event, item)} className="item__button--back"><i className="plus icon item__button--icon"></i></div>
                            </div>
                        </div>
                     </div>
                </Link>
            );
        });
    };

    onPlusButtonClick = (event, item) => {
        event.preventDefault();

        this.props.addToBowl(item);
        history.goBack();
    }

    render() {
        return(
            <Modal 
                content={this.renderSelectedToppings()}
                onDismiss={history.goBack}
            />
        );
    };
}

const mapStateToProps = (state) => {
    return {
        selectedTopping: state.selectedTopping
    };
};

export default connect(mapStateToProps, { getId: getId, addToBowl: addToBowl })(SelectedTopping);