import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import ModalNutrition from './ModalNutrition';
import history from '../history';
import '../css/Nutrition.css';
import '../css/icon-font.css';
import { changeServingSize } from '../actions';

class Nutrition extends React.Component {
    constructor(props) {
        super(props)
        this.renderedUnitDropDown = this.renderedUnitDropDown.bind(this);
        this.renderUnitInput = this.renderUnitInput.bind(this);
    }

    renderAmountInput(formProps) {
        return(
            <div className="card__field">
                <label className="card__field--label">
                    <span className="card__field--label--1">Amount</span>
                    <input {...formProps.input} className="card__field--input" defaultValue="100"/>
                </label>
            </div>
        );
    }

    renderedUnitDropDown() {
        return this.props.units.map((item) => {
            return <option className="card__field--option">{item}</option>
        });
    }

    renderUnitInput(formProps) {
        return(
            <div className="card__field">
                <label className="card__field--label">
                    <span className="card__field--label--1">Units</span>
                    <select {...formProps.input} className="card__field--input">{this.renderedUnitDropDown()}</select>
                </label>
            </div>
        );
    }

    onSubmit = (formValues) => {
         console.log(formValues);
         this.props.changeServingSize(formValues);
    }

    renderNutritionInfo() {
        return(
            <div className="card">
                <div className="card__header">
                    <h1 className="card__header--name">Nutrition</h1>
                    <i className="card__header--icon fas fa-seedling" />
                </div>
                <div className="card__content">
                    <form className="card__form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                        <span className="card__form--enter">Enter</span>
                        <Field name="amount" component={this.renderAmountInput} />
                        <Field name="unit" component={this.renderUnitInput} />
                    </form>
                    <div className="card__line"></div>
                    <div className="card__values">
                        <div className="card__values--meta">Calories: <span className="card__values--description">{this.props.nutritionInfo.nutrients[22].amount}</span></div>
                        <div className="card__values--meta">Fat: <span className="card__values--description">{this.props.nutritionInfo.nutrients[5].amount}</span></div>
                        <div className="card__values--meta">Saturated Fat: <span className="card__values--description">{this.props.nutritionInfo.nutrients[20].amount}</span></div>
                        <div className="card__values--meta">Carbohydrates: <span className="card__values--description">{this.props.nutritionInfo.nutrients[17].amount}</span></div>
                        <div className="card__values--meta">Sugar: <span className="card__values--description">{this.props.nutritionInfo.nutrients[1].amount}</span></div>
                    </div>
                </div>
            </div>
        );
    };

    render() {
        return(
            <ModalNutrition 
                content={this.renderNutritionInfo()}
                onDismiss={history.goBack}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        nutritionInfo: state.nutritionInfo.nutrition,
        units: state.nutritionInfo.possibleUnits
    };
};

const formWrapped = reduxForm({
    form: 'servingSize'
})(Nutrition);

export default connect(mapStateToProps, { changeServingSize: changeServingSize })(formWrapped);