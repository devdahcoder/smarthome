import React from 'react'
import "./dropdownitem.css"


const DropDownItem = ({option}) => {
    return (
        <li className="drop-down-item-li">
            <div>
                {option.value}
            </div>
        </li>
    )
}

export default DropDownItem
