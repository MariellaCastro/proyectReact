import React from 'react'
import { Carrusel } from '../components/Carrusel'
import { Oferta } from '../components/Oferta'
import { Destinos } from '../components/Destinos'
import { HuarazSeccion } from '../components/HuarazSeccion'
import { Footers } from '../components/Footers'
import { Comentarios } from '../components/Comentarios'

export const Home = () => {
    return (
        <>
            <Carrusel />
            <Oferta />
            <Destinos />
            <HuarazSeccion />
            <Comentarios/>
            <Footers />
        </>
    )
}
