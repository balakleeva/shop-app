import React from 'react';
import './styles.scss'
import cx from 'classnames';
import {connect} from 'react-redux'
import {removePurchase, togglePurchase} from '../../reducers/purchases/actions'

const PurchaseItem = ({text, id, isBought, removePurchase, togglePurchase}) => {
    return (
        <div className="item-container">
            <span className={cx("item-text", {'bought': isBought})}
                  onClick={() => togglePurchase(id)}
            >
                {text}
            </span>
            <span className="remove-item" onClick={() => removePurchase(id)}>x</span>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({
    removePurchase: (params) => dispatch(removePurchase(params)),
    togglePurchase: (params) => dispatch(togglePurchase(params))
});

export default connect(null, mapDispatchToProps)(PurchaseItem);