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
      <h1>Scegli il film che vuoi cercare 🎥</h1>

      <div className='container'>
      {
        list.map(lista =>
          <div className='card'>
            <h3>{lista.title}🎬</h3>
          </div>
        )
      }
      </div>
      
    </>
  )
}

export default App
