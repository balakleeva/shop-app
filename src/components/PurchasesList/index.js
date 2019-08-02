import React from 'react';
import './styles.scss'
import AddPurchase from '../../containers/AddPurchase'
import Purchases from '../Purchases'
import {connect} from "react-redux";
import FilterButton from "../../containers/FilterButton";

const PurchasesList = ({purchases, match}) => {
    return (
        <div className="wrap">
            <div className="container">
                <div className="purchases-container">
                    <Purchases
                        items={purchases.items}
                        filter={match.params.filter}
                    />
                </div>
                <div className="input-area">
                    <AddPurchase/>
                    <div className="button-group">
                        <FilterButton
                            text="All"
                            filter="all"
                        />
                        <FilterButton
                            text="Active"
                            filter="active"
                        />
                        <FilterButton
                            text="Bought"
                            filter="bought"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    purchases: state.purchasesList,
});

export default connect(mapStateToProps, null)(PurchasesList);