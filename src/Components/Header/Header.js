import React from 'react'
import "./header.css"
import Setting from "../../GlobalSvg/setting.svg"
import Notification from "../../GlobalSvg/notification.svg"
import DownArrow from "../../GlobalSvg/downArrow.svg"

export const Header = () => {
    return (
        <header>
            <div>

            </div>


            <div>
                <form action="">
                    <label htmlFor="">
                        <input type="text" name="" id=""/>
                    </label>
                </form>
            </div>

            <div>
                <div>
                    <button>
                        <div>
                            <img src={Setting} alt=""/>
                        </div>
                    </button>
                </div>
                <div>
                    <button>
                        <div>
                            <img src={Notification} alt=""/>
                        </div>
                    </button>
                </div>

                <div>
                    <span>
                        <img src="" alt=""/>
                    </span>

                    <div>
                        <p>Adele Alex <span><button><div><img src={DownArrow} alt=""/></div></button></span></p>
                    </div>
                </div>
            </div>
        </header>
    )
}


export default Header;