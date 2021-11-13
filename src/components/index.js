import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Pokedex } from './Pokedex'

ReactDOM.render(
  <StrictMode>
    <Pokedex />
  </StrictMode>,
  document.getElementById('root')
);
