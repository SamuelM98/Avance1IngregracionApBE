import React, { useEffect, useState } from 'react'
import './App.css'
import Carta from './Carta/Carta'


const App = () => {

  const [menu, setMenu] = useState([])
  
  const listaMenu = {
    "ceviche":35, "lomo saltado":22, "aji de gallina":13, "pollo a la brasa":45, "causa rellena":16, "cuy chactado":65,
    "rocoto relleno":28, "seco de carne":18, "tiradito de carne":32, "anticuchos":20, "pachamanca":25, "arroz con camarones":27
  }
  
  useEffect(()=>{
    const menuItems = Object.entries(listaMenu).map(([nombre,precio])=>{
      const path = require(`./Img/${nombre}.jpg`)
      return(
        <div className='plato' key={nombre}>
          <Carta ruta={path} nombre={nombre} precio={precio}/>
        </div>
      )
    })

    setMenu(menuItems)
  },[])

  return (
    <>
    <div className='carta'>
      {menu}
    </div>
    </>
  )
}

export default App
