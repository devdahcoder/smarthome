import React from 'react'
import "./header.css"
import Setting from "../../GlobalSvg/setting.svg"
import Notification from "../../GlobalSvg/notification.svg"
import DownArrow from "../../GlobalSvg/downArrow.svg"
import Search from "../../GlobalSvg/search.svg"

export const Header = () => {
    return (
        <header>
            <div>
                <div className="logo-pulse">
                    <p>H</p>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>


            <div className="header-form-display">

                <div className="label">
                    <div className="search-icon-container">
                        <button>
                            <div className="svg-container">
                                <img src={Search} alt=""/>
                            </div>
                        </button>
                    </div>
                    <input type="text" name="" id="" placeholder="Search" />
                </div>
            </div>

            <div className="header-user-display">
                <div className="user-btn-display">
                    <button>
                        <div className="svg-container">
                            <img src={Setting} alt=""/>
                        </div>
                    </button>
                </div>


                <div className="user-btn-display">
                    <button>
                        <div className="svg-container">
                            <img src={Notification} alt=""/>

                            <div className="notification-dot">
                            </div>
                        </div>
                    </button>
                </div>

                <div className="main-user-detail">
                    <span className="user-image-container">
                        <img src="https://scontent-los2-1.cdninstagram.com/v/t51.2885-19/s150x150/124325366_383369512815389_1548848706009910097_n.jpg?tp=1&_nc_ht=scontent-los2-1.cdninstagram.com&_nc_ohc=R3zx13fpihMAX8VahKE&oh=15e4d41aa9c27ad7e71bd42efbdffdca&oe=606A8763" alt=""/>
                    </span>

                    <div className="user-name-container">
                        <p>Adele Alex 😎  <span className="header-drop-down"><button><div className="svg-container"><img src={DownArrow} alt=""/></div></button></span></p>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;