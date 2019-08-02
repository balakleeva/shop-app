import React from 'react'
import './styles.scss'
import PurchaseItem from '../PurchaseItem'

const Purchases = ({items, filter}) => {
    const getPurchases = () => {
        return items.filter((item) => ((filter === 'all') || (filter === 'bought') === item.isBought));
    };

    return (
        <div className="purchases">
            <div className="purchases-list">
                {getPurchases().map((item) => (
                        <PurchaseItem
                            text={item.text}
                            id={item.id}
                            key={item.id}
                            isBought={item.isBought}
                        />
                    )
                )}
            </div>
        </div>
    )
};

export default Purchases;