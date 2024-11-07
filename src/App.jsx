import './App.css'
import Card from './Componentes/Card'
import { useState } from "react";

function App() {

  
  const [libro, setLibro] = useState("");
  const [autor, setAutor] = useState("");
  const [mostrarCard, setMostrarCard] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

      if (libro.trim().length > 2 && autor.trim().length > 5) {
          setMostrarCard(true)
          setError("")
      } else {
          setMostrarCard(false)
          setError('Por favor chequea que la información sea correcta.');
      }


  };   

  return (
    <>
      <form onSubmit={handleSubmit}>
          <label >¿Cuál es el nombre de tu libro favorito?</label>
          <input type="text"
            value={libro}
            onChange={(event) => setLibro(event.target.value)}
          />

          <label >¿Quien es el autor?</label>
          <input type="text" 
            value={autor}
            onChange={(event) => setAutor(event.target.value)}
          />
          <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {mostrarCard && <Card libro={libro} autor={autor} />}
    </>
  )
}

export default App
