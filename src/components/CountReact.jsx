// si empieza con use... es un hook
// Un estado es una forma de mantener y actualizar información en un componente de una aplicación. Es como una "memoria" que el componente puede usar para almacenar y acceder a los datos que necesita para funcionar correctamente.

// renderizado es cuando react vuelve a ejecutar el componente y actualiza la vista
// los renderizados son 
// cuando carga la app al iniciar]
// cuando cambia un estado
// cuando cambia una prop 

// react no sabe cuando cambia el dato para que actualice la vista.
// para que react sepa debemos guardarla en estados para que cuando cambie react la actualice
// es una función por lo tanto hay que ejecutarla useState()
// viene de react por lo tanto hay que importarla

// Reglas de un useState
// 1 - Se tiene que usar dentro de un componente
// 2 - No puedo ejecutar inmediatamente
	//     estado  ,  la funcion encargada de cambiar el valor del estado

//     si no paso el callback se ejecuta o si la ejecuto directamente fuera de una funcion  crea un loop infinito, se ejecuta cambia el estado se ejecuta y vuelve a cambiar..
// react tiene un limite  de renderizado

// el nombre setAlgo es x convencion 


import { useState } from "react";

function CountReact() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  console.log(count);
  return (
    <div>
      <div>
        <p>Contador con react</p>
        <button onClick={handleClick}>+</button>
        <h3>{count}</h3>

        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default CountReact;
