import React from 'react'
import "./dropdown.css"
import { v4 as uuid } from 'uuid'
import DropDownItem from "../DropDownItem/DropDownItem"
import DownArrow from "../../GlobalSvg/down-arrow.svg"

const options = [
    {
      value: "Living Room",
    },
    {
      value: "Dinning Room",
    },
    {
      value: "Toilet",
    },
    {
      value: "Kitchen",
    },
];

const DropDown = () => {
    return (
        <div className="select-container">
            <div className="drop-down">
              <ul className="default-option">
                <li>
                  <div className="display-option">
                    <p>Bathroom</p>

                    <div>
                      <img height="10px" src={DownArrow} alt=""/>
                    </div>

                  </div>
                </li>
              </ul>

              {/* <ul className="main-options">
                {
                  options.map((option) => (
                    <DropDownItem key={uuid()} option={option} />
                  ))
                }
              </ul> */}
            </div>
        </div>
    )
}

export default DropDown
