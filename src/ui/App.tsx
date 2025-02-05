import './App.css'
import {ReactElement} from "react";
import Ingredients from "./components/Ingredients.tsx";

function App(): ReactElement {

  return (
    <>
        <h1>Sandwich Power Calculator for Pokémon™ Scarlet & Violet</h1>
        <div>
            <Ingredients />
        </div>
    </>
  )
}

export default App
