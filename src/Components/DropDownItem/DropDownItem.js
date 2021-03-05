import React from 'react'
import "./dropdownitem.css"


const DropDownItem = ({option}) => {
    return (
        <>
            <option className="option" value={option.value}>{option.value}</option>
        </>
    )
}

export default DropDownItem
