import React from 'react';
import { connect } from 'react-redux';
import { selectTopping } from '../actions';
import { Link } from 'react-router-dom';
import '../css/Toppings.css';

class Toppings extends React.Component {
    renderToppings() {
        return this.props.toppings[this.props.bowlIndex].map((topping) => {
            return(
                <div className="ui container category">
                    <Link to="/SelectedTopping">
                        <div onClick={() => this.props.selectTopping(topping)} className="category__content">
                            <h1 className="category__header">{topping.name}</h1>
                        </div>
                    </Link>
                </div>
            );
        });
    };

    render() {
        return(
            <div className="grid">{this.renderToppings()}</div>
        );
    };
};

const mapStateToProps = state => {
    return { 
        toppings: state.toppings,
        bowlIndex: state.selectedBowl.index
    };
};

export default connect(mapStateToProps, { selectTopping: selectTopping })(Toppings);