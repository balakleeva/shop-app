import React, { useState, useCallback } from 'react'
import './styles.scss'
import {connect} from "react-redux";
import {addNewPurchase} from '../../reducers/purchases/actions'

const AddPurchase = ({addNewPurchase}) => {
    const [text, setText] = useState('');


    const handleClick = useCallback((text) => {
        addNewPurchase(text);
        setText('');
    }, [addNewPurchase]);

    return (
        <div className="input-container">
            <input
                className="purchase-input"
                placeholder="Write wanted purchase"
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <button
                className="input-button"
                onClick={() => handleClick(text)}
            >
                Add purchase
            </button>
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addNewPurchase: (params) => dispatch(addNewPurchase(params)),
    }
};

export default connect(null, mapDispatchToProps)(AddPurchase);