import { useState } from "react"

const Title = () => {
    const [title, setTitle] = useState('Hola');
    console.log(title)
  return (
    <div>
    <h6>{title}</h6>
    <button onClick={()=>setTitle('Chau')}>Cambiar título</button>
      
    </div>
  )
}

export default Title
