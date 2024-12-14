import React from 'react'
import { Menu } from '../components/Menu'
import './../components/hotel/hotel.css'
import { BannerH } from '../components/hotel/BannerH'
import { Footers } from '../components/Footers'
import { Rooms } from '../components/hotel/Rooms'
import { Servicios } from '../components/hotel/Servicios'
import { Testimonios } from '../components/hotel/Testimonios'

export const Hotel = () => {
  return (
    <>
    <Menu/>
    <BannerH/>
    <Rooms/>
    <Servicios/>
    <Testimonios/>
    <Footers/>
    </>
  )
}
