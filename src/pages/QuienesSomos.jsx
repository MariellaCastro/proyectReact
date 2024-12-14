import React from 'react'
import './../components/somos.css'
import { Menu } from '../components/Menu'
import { Banner } from '../components/Banner'
import { Footers } from '../components/Footers'
import { AboutUs } from '../components/AboutUs'
import Movilidades from '../components/Movilidades'
export const QuienesSomos = () => {
    return (
        <>
            <Menu />
            <Banner/>
            <AboutUs/>
            <Movilidades/>
            <Footers/>
        </>
    )
}
