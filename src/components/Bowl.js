import React from 'react';
import { connect } from 'react-redux';
import { selectBowl } from '../actions';
import { Link } from 'react-router-dom';
import sparks4 from '../images/misc/sparks4.png';
import '../css/Bowl.css';
import { deleteBowlToppings } from '../actions';

class Bowl extends React.Component {
    renderBowls() {
        return this.props.bowls.map((bowl) => {
            return (
                <div className="ui container bowl">
                    <Link to='/BowlSelection'>
                        <div 
                            onClick={() => this.onBowlClick(bowl)}
                            className="bowl__content"
                        >
                            <h1 className="bowl__header">{bowl.name}</h1>
                            <div className="btn">
                                <i className="chevron right icon" />
                            </div>
                        </div>
                    </Link>
                </div>
            );
        });
    }

    onBowlClick = (bowl) => {
        this.props.delete();

        this.props.selectBowl(bowl);
    }

    renderBowlImages() {
        return this.props.bowls.map((bowl) => {
            return (
                <div className="box__child">
                    <img className="box__sparks" src={sparks4} />
                    <img className="box__image" src={bowl.image} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="ui container bowlDisplay">{this.renderBowls()}</div>
                <div className="box">

                    <span className="box__glow"></span>

                    {this.renderBowlImages()}
                </div>
            </div>
            
            
        );

    }

} 

const mapStateToProps = state => {
    return { bowls: state.bowls };
};

export default connect(mapStateToProps, { selectBowl: selectBowl, delete: deleteBowlToppings  })(Bowl);

