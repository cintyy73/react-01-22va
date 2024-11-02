import { useState } from "react"

const Title = () => {
    const [title, setTitle] = useState('Hola'); //<-tiene un valor inicial este se le pasa por parámetros al useState en este caso es 'Hola' en el contador era 0 
    console.log(title)
  return (
    <div>
    <h6>{title}</h6>
    <button onClick={()=>setTitle('Chau')}>Cambiar título</button>
      
    </div>
  )
}

export default Title
