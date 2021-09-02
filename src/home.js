import { Link} from 'react-router-dom'
import './home.css'
import React from 'react'
import tlou from './tlou2.jpg'
import gow from './GOW.jpg'
import re4 from './RE4.jpg'
import over from './overwatch.jpg'
import out from './outlast.jpg'
import rdr from './RDR2.jpg'

import grimm from './grimm.jpg'
import GOT from './GOT.jpg'
import TWD from './TWD.jpg'
import TBBT from './TBBT.jpg'
import YOU from './YOU.jpg'
import TUA from './TUA.jpeg'
import RandM from './RandM.jpg'

import qtd from './questao_de_tempo.jpg'
import DH from './DH.jpg'
import IlhaM from './IlhaM.jpg'
import M2I from './M2I.jpg'
import TOG from './TOG.jpg'
import Outros from './outros.jpg'




function Principal(){
    
    var img_jogo = document.createElement('img')
    var img_serie = document.createElement('img')
    var img_filme = document.createElement('img')

    function sla(){
    var d = document.getElementById('destroe')
    d.remove()

    var div_jogo = document.getElementById('div_jogo')
    var div_serie = document.getElementById('div_serie')
    var div_filme = document.getElementById('div_filme')

    var num_jogo = Math.floor(Math.random() * 6) +1
    var num_serie = Math.floor(Math.random() * 7) +1
    var num_filme = Math.floor(Math.random() * 6) +1
    
    img_jogo.setAttribute('id', 'img_jogo')
    img_serie.setAttribute('id', 'img_serie')
    img_filme.setAttribute('id', 'img_filme')

    // Jogo
    
    if (num_jogo === 1){
        img_jogo.setAttribute('src', tlou)
        div_jogo.appendChild(img_jogo)
    }else if(num_jogo === 2){
        img_jogo.setAttribute('src', gow)
        div_jogo.appendChild(img_jogo)
    }else if(num_jogo === 3){
        img_jogo.setAttribute('src', over)
        div_jogo.appendChild(img_jogo)
    }else if(num_jogo === 4){
        img_jogo.setAttribute('src', out)
        div_jogo.appendChild(img_jogo)
    }else if(num_jogo === 5){
        img_jogo.setAttribute('src', re4)
        div_jogo.appendChild(img_jogo)
    } else if(num_jogo === 6){
        img_jogo.setAttribute('src', rdr)
        div_jogo.appendChild(img_jogo)
    }
    
    // Serie
    if (num_serie === 1){
        img_serie.setAttribute('src', TUA)
        div_serie.appendChild(img_serie)
    }else if(num_serie === 2){
        img_serie.setAttribute('src', TWD)
        div_serie.appendChild(img_serie)
    }else if(num_serie === 3){
        img_serie.setAttribute('src', TBBT)
        div_serie.appendChild(img_serie)
    }else if(num_serie === 4){
        img_serie.setAttribute('src', YOU)
        div_serie.appendChild(img_serie)
    }else if(num_serie === 5){
        img_serie.setAttribute('src', GOT)
        div_serie.appendChild(img_serie)
    } else if(num_serie === 6){
        img_serie.setAttribute('src', RandM)
        div_serie.appendChild(img_serie)
    }else if(num_serie === 7){
        img_serie.setAttribute('src', grimm)
        div_serie.appendChild(img_serie)
    }
    
    // Filme
    if (num_filme === 1){
        img_filme.setAttribute('src', qtd)
        div_filme.appendChild(img_filme)
    }else if(num_filme === 2){
        img_filme.setAttribute('src', TOG)
        div_filme.appendChild(img_filme)
    }else if(num_filme === 3){
        img_filme.setAttribute('src', Outros)
        div_filme.appendChild(img_filme)
    }else if(num_filme === 4){
        img_filme.setAttribute('src', M2I)
        div_filme.appendChild(img_filme)
    }else if(num_filme === 5){
        img_filme.setAttribute('src', IlhaM)
        div_filme.appendChild(img_filme)
    } else if(num_filme === 6){
        img_filme.setAttribute('src', DH)
        div_filme.appendChild(img_filme)
    }
    }
    

    return(
    <div onLoad={sla} >
        
        <section id="secao">
            <div className="jogo-esquerda" >
               
                    <div id="div_jogo"></div>
                    <figcaption id="legenda" className="fig_jogo">
                        <Link to="/Jogos"><button id="ver_mais" className="btn_jogo">Ver Mais</button></Link>
                    </figcaption>
                
            </div>
           
            <div className="jogo-esquerda">
                
                    <div id="div_serie"></div>
                    <figcaption id="legenda" className="fig_serie">
                        <Link to="/Series"><button id="ver_mais" className="btn_serie">Ver Mais</button></Link>
                    </figcaption>
                
            </div>
            <div className="jogo-esquerda">
                
                    <div id="div_filme"></div>
                   
                    <figcaption id="legenda" className="fig_filme">
                        <Link to="/Filmes"><button id="ver_mais" className="btn_filme">Ver Mais</button></Link>
                    </figcaption>
                
            </div>
            <img src={tlou} alt='destroe' id="destroe"/>
        </section>
    </div>
    )
    }
export default Principal

