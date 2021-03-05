import React from 'react'
import "./admincontrolpanel.css"
import Weather from "../../GlobalSvg/weather.svg"
import RoomTemperature from "../RoomTemperature/RoomTemperature"


const AdminControlPanel = () => {
    return (
        <section className="admin-panel-container">
            <div className="admin-panel-display">
                <div className="current-user-container">
                    <div className="user-display">
                        <div><p>Hi Jasica!</p></div>

                        <div>
                            <p>Welcome Home! The air quality is good & Fresh you can go out today</p>
                        </div>

                        <div>
                            <div>
                                <p>+25 <sup>o</sup> C<span>  <img src={Weather} alt=""/></span></p>
                            </div>
                            <div><p>Outdoor temperature</p></div>
                            <div><p>fuzzy cloudy weather</p></div>
                        </div>
                    </div>
                </div>

                <RoomTemperature />

            </div>
        </section>
    )
}

export default AdminControlPanel
