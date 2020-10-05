import React from 'react'
import Header from '../Components/Header'
import Menu from '../Components/Menu'
import MeterDetails from '../Components/Meterlist/meterDetails'
import '../Pages/css/Addmeter.css'

export default function Addmeter() {
    return (
        <div>
            <Header/>
            <Menu />
            <div className="content-wrapper" style={{minHeight: '1203.6px'}}>
            <MeterDetails />
            </div>
        </div>
    )
}
