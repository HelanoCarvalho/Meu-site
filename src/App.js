import React from 'react'
import './home.css'
import './menu.css'
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Home from './home.js'
import Jogo from './jogo.jsx'
import Filmes from './filme'
import Series from './serie'
import Navegar from './menu.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Navegar></Navegar>
        <Switch>
          <Route exact path="/Meu-site" component={Home} />
          <Route path="/jogos" component={Jogo} />
          <Route path="/Series" component={Series} />
          <Route path="/Filmes" component={Filmes} />
          
          
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App