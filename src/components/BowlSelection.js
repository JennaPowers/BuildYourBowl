import React from 'react';
import { connect } from 'react-redux';
import '../css/BowlSelection.css';
import Toppings from './Toppings';

class BowlSelection extends React.Component {

    renderBubbles() {
        if (this.props.toppingBubbles != null) {
            return this.props.toppingBubbles.map((item) => {
                return (
                    <div className="bubble">
                        <div className="bubble__side bubble__side--front">
                            <img className="bubble__image" src={item.image}></img>
                        </div>
                        <div className="bubble__side bubble__side--back">
                            <span className="bubble__name">{item.name}</span>
                        </div>
                    </div>
                );
            });
        }
        else return;
    };

    render() {
        return(
            <div className="page">
                <div className="ui container">
                    <div className="page__name">{`Select your ${this.props.selectedBowlName} toppings`}</div>
                    <Toppings className="page__toppings"/>
                    <div className="page__whitebox">
                        <img className="page__bowl" src={this.props.selectedBowlImage} alt="bowl" /> 
                    </div>
                    <div className="page__bubbles">{this.renderBubbles()}</div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { 
        selectedBowlName: state.selectedBowl.name,
        selectedBowlImage: state.selectedBowl.plainImage,
        toppingBubbles: state.toppingBubbles
    };
};

export default connect(mapStateToProps, null)(BowlSelection);