 //en js teníamos que dar id al botón , usar queryselector dar un evento ahora el  onclick es en camel case onClick y se pasan como una props onclick={}
//         se pueden añadir en el evento si es una sola linea
//         sino creo una funcion, si lleva parámetros le paso un callback para que no se ejecute automáticamente */}
       
function CountJS() {
    let contador = 0;

    const suma = ()=>{
      console.log('suma',contador)
      contador +=1
    }
    
    const resta = ()=>{
      console.log('resta', contador )
      contador -=1
    }
      return (
        <div>
            <div>
              <p>contador con js</p>
          <button onClick={suma}>+</button>
          <p>{contador}</p>
          <button onClick={resta}>-</button>
          </div>
    
         
        
        </div>
      )
    }
    
export default CountJS;


