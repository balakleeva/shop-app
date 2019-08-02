import React from 'react'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom'
import { Route} from 'react-router'
import PurchasesList from "../PurchasesList";

const Root = ({store}) => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Route path="/:filter?" render={props => <PurchasesList {...props} />} />
            </BrowserRouter>
        </Provider>
    )
};

export default Root;