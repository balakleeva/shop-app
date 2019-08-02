import React from 'react'
import './styles.scss'
import {Link} from 'react-router-dom'

const FilterButton = ({text, filter}) => {
    return (
        <Link
            to={filter}
        >
            <button
                className="filter-button"
            >
                {text}
            </button>
        </Link>
    )
};

export default FilterButton;