import React from 'react'

export const Servicios = () => {
    const servicios = [
        { img: "mapa", text: "Excelente ubicación" },
        { img: "desayuno", text: "Desayuno incluido" },
        { img: "recepcion", text: "Recepción 24h" },
        { img: "wifi", text: "WiFi" },
        { img: "limpiador", text: "Limpieza diaria" },
        { img: "estacionamiento", text: "Estacionamiento exterior" },
        { img: "tour", text: "Tours" },
        { img: "traslado", text: "Traslado" },
        { img: "equipaje", text: "Guarda equipaje" },
    ]

    return (
        <section className="services">
            <h2>NUESTROS SERVICIOS</h2>
            <div className="service-grid">
            {servicios.map((servicio) => (
                
                    <div className="service-item">
                        <img src={`img/hotel/servicios/${servicio.img}.png`} />
                        <p>{servicio.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
