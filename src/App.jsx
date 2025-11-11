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

const genres = []

for (let i = 0; i < list.length; i++) {
  const toKeep = list[i].genre;
  if (!genres.includes(toKeep)) {
    genres.push(toKeep)
  }
}

console.log(genres);


 const [search, setSearch] = useState('')
 const [select, setSelect] = useState('')
 const [films, setFilms] = useState(list)


  useEffect(() => {

let scelta = select

  
    if (scelta === "" || scelta === "Seleziona il genere") {
    setFilms(list)
  } else {
    setFilms(list.filter((lista) => lista.genre === select))
  }
  
 }, [select])

  return (
    <>
      <h1>Scegli il genere di film che vuoi cercare tra quelli disponibili 🎥</h1>

      <div className='container'>
          <select className="form-select" aria-label="Default select example" value={select} onChange={(e) => setSelect(e.target.value)}>
          <option >Seleziona il genere</option>
      {
        genres.map(generi =>
          <option key={generi.length + 1} >{generi}</option>
        )
      }
      </select>
    <input placeholder='Oppure cerca un film'   type='text' className='' value={search} onChange={(e) => setSearch(e.target.value)} /> 
      {
        films.map(lista =>
          <div className='text-start py-1' value={films} key={lista.title} >
            <h3>{lista.title} - {lista.genre}</h3>
          </div>
        )
      }
      </div>
      
    </>
  )
}

export default App
