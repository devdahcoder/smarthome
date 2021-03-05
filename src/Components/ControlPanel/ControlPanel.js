import React from 'react'
import "./controlpanel.css"
import AdminControlPanel from "../AdminControlPanel/AdminControlPanel"
import DeviceControlPanel from "../DeviceControlPanel/DeviceControlPanel"

const ControlPanel = () => {
    return (
        <section className="control-panel">
            <AdminControlPanel />
            <DeviceControlPanel />
        </section>
    )
}

export default ControlPanel
