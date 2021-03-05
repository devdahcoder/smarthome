import React from 'react'
import "./nav.css"
import Home from "../../GlobalSvg/home.svg"
import Table from "../../GlobalSvg/table.svg"
import Security from "../../GlobalSvg/security.svg"
import Location from "../../GlobalSvg/location.svg"
import Admin from "../../GlobalSvg/admin.svg"
import Chart from "../../GlobalSvg/chart.svg"
import Log from "../../GlobalSvg/log.svg"

const Nav = () => {
    return (
        <nav className="side-nav">
            <ul className="side-ul">
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Home} alt="home"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Table} alt="table"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Security} alt="security"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Location} alt="location"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Admin} alt="admin"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Chart} alt="chart"/></div></a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer"><div className="side-link-container"><img src={Log} alt="log"/></div></a></li>
            </ul>
        </nav>
    )
}


export default Nav
