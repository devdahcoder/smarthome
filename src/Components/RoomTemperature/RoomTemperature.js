import React from 'react'
import "./roomtemperature.css"
import Drop from "../../GlobalSvg/drop.svg"
import Temp from "../../GlobalSvg/temp.svg"
import DropDown from "../DropDown/DropDown"

const RoomTemperature = () => {
    return (
        <section>
            <div>
                <div>
                    <p>Scarlett’s Home</p>
                </div>
                <div>
                    <div>
                        <span><button><div className="svg-container"><img src={Drop} alt=""/></div></button></span>

                        <p>35%</p>
                    </div>
                    <div>
                        <span><button><div className="svg-container"><img src={Temp} alt=""/></div></button></span>

                        <p>25 <sup>o</sup> C</p>
                    </div>

                    <DropDown />
                </div>
            </div>
        </section>
    )
}

export default RoomTemperature
