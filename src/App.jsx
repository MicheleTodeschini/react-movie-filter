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


 //const [search, setSearch] = useState('')
 const [select, setSelect] = useState('')

 useEffect(() => {
// SE il genere in select è uguale al genere del film, mi restituisce il film
let scelta = select

  if (scelta === list.genre) {
    setSelect(scelta)
  } 
  
 }, [select])

  return (
    <>
      <h1>Scegli il genere di film che vuoi cercare tra quelli disponibili 🎥</h1>

      <div className='container'>
          <select className="form-select" aria-label="Default select example">
          <option >Seleziona il genere</option>
      {
        list.map(lista =>
          <option key={lista.title} value={select} onChange={(e) => setSelect(e.target.value)}>{lista.genre}</option>
        )
      }
      </select>
    { /* <input placeholder='Oppure cerca un film'   type='text' className='' value={search} onChange={(e) => setSearch(e.target.value)} /> */}
      {
        list.map(lista =>
          <div className='text-start py-1' key={lista.title} >
            <h3>{lista.title} - {lista.genre}</h3>
          </div>
        )
      }
      </div>
      
    </>
  )
}

export default App
