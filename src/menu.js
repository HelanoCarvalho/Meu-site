import React from 'react'


import { Link, Router, BrowserRouter } from 'react-router-dom'

function Navegar(){
    
    
    return (
        <nav id="menu-h">
            <ul>

                <li>
                    <Link to="/"><p id="home" >Home</p></Link> 
                </li>

                <li>
                    <Link to="/Jogos"><p>Jogos</p></Link>
                </li>

                <li>
                    <Link to="/Series"><p>Séries</p></Link>
                </li>

                <li>
                    <Link to="/Filmes"><p>Filmes</p></Link>              
                </li>

            </ul>
        </nav>
      )
}

export default Navegar