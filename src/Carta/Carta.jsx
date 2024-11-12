import React from 'react'

const Carta = ({ruta,nombre,precio}) => {

  return (
    <>
      <img className='foto' src={ruta} alt={nombre}/>
      <h3 className='nombre'>{nombre}</h3>
      <h2>S/ {precio}.00</h2>
    </>
  )
}

export default Carta
