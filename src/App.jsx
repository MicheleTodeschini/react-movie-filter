import { useState, useEffect } from 'react'
import './App.css'

function App() {

const list = [
  { title: 'Inception', genre: 'Fantascienza' },
   { title: 'Il Padrino', genre: 'Thriller' },
   { title: 'Titanic', genre: 'Romantico' },
   { title: 'Batman', genre: 'Azione' },
   { title: 'Interstellar', genre: 'Fantascienza' },
   { title: 'Pulp Fiction', genre: 'Thriller' },
 ]
 

  return (
    <>
      <h1>Scegli il genere di film che vuoi cercare tra quelli disponibili 🎥</h1>

      <div className='container'>
          <select class="form-select" aria-label="Default select example">
          <option selected>Seleziona il genere</option>
      {
        list.map(lista =>
          <option value="">{lista.genre}</option>
        )
      }
      </select>
      {
        list.map(lista =>
          <div className='text-start py-1' key={lista.title} >
            <h3>{lista.title}🎬</h3>
          </div>
        )
      }
      </div>
      
    </>
  )
}

export default App
