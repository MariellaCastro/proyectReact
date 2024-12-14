import React from 'react'
import { Carrusel } from '../components/Carrusel'
import { Oferta } from '../components/Oferta'
import { Destinos } from '../components/Destinos'
import { HuarazSeccion } from '../components/HuarazSeccion'
import { Footers } from '../components/Footers'

export const Home = () => {
    return (
        <>
            <Carrusel />
            <Oferta />
            <Destinos />
            <HuarazSeccion />
            <Footers />
        </>
    )
}
