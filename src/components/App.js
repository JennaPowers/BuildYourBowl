import React, { Fragment } from 'react';
import BYB from './BYB';
import Bowl from './Bowl';
import BowlSelection from './BowlSelection';
import SelectedTopping from './SelectedTopping';
import Nutrition from './Nutrition';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
    render() {
        return(
            <Fragment>
                <BYB />
                <Router>
                        <Route path='/' exact>
                            <Bowl />
                        </Route>
                        <Route path='/BowlSelection'>
                            <BowlSelection />
                        </Route>
                        <Route path='/SelectedTopping'>
                            <SelectedTopping />
                        </Route>
                        <Route path="/ShowNutrition">
                            <Nutrition />
                        </Route>
                </Router>
            </Fragment>
        );
    }
}

export default App;