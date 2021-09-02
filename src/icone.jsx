
import './icone.css'
import React from 'react'



var teste = true

export default props => {
    teste = true

        
    function Sinopse(texto){
        this.texto = texto
    }

    function Trailer(url){
        this.url = url
    }

    function gerar(){   

       if (teste == true){
           
            var trailer = new Trailer(props.url)
            var aqui = document.getElementById('aqui')
            var janela = document.createElement('div') 
            var iframe = document.createElement('iframe')
            var sinopse = document.createElement('p')
            var fechar = document.getElementById('fechar')
            var btn = document.createElement('button') 
            sinopse.getAttribute('id', 'texto')   
            btn.setAttribute('id', 'btn_fechar')
            btn.innerHTML = 'Fechar'    
            janela.setAttribute('id', 'janela')
            iframe.setAttribute('id', 'video')
            iframe.setAttribute('src', trailer.url)
            sinopse.setAttribute('id', 'sinopse')
            iframe.setAttribute('frameborder', '0')
            var texto = new Sinopse(props.sinopse)
            sinopse.innerHTML = texto.texto
            window.scrollTo(0, 50)
            
            janela.appendChild(iframe)
            janela.appendChild(sinopse)
            aqui.appendChild(janela)
            fechar.appendChild(btn)
            teste = false
                      
            btn.onclick = function(){
                var btn = document.getElementById('btn_fechar')
                var janela = document.getElementById('janela') 
                var iframe = document.getElementById('video')
                var label = document.getElementById('sinopse') 
                janela.remove()
                iframe.remove()
                label.remove()
                btn.remove()               
                teste = true
            }
        }          
}   
    return(
       <>
                <div id="fechar"></div>
                <div id="aqui"></div>
            

            <div id="item">
                <img id="img" className={props.class} src={props.img}/>
                <div id="div_titulo">
                    <h1 onClick={gerar} id="titulo">{props.titulo}</h1>
                </div>               
            </div>
       </>
    )
}
