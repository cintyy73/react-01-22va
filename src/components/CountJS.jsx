
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


