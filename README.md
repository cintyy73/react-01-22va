## Ejercicio 1

- Preguntas y respuestas: Crea un componente que tenga una pregunta y cuatro posibles respuestas. Cuando se seleccione una respuesta, se debería mostrar si es la respuesta correcta o no. Luego, se debería mostrar la siguiente pregunta y respuestas. Utiliza una lista de preguntas y respuestas para cambiar de una pregunta a otra.

const questions = [
  {
    question: "¿Cuál es el animal más grande del mundo?",
    answers: [
      { id: "1", text: "Elefante" },
      { id: "2", text: "Ballena azul", correct: true },
      { id: "3", text: "Jirafa" },
      { id: "4", text: "Hipopótamo" },
    ],
  },
  {
    question: "¿En qué año comenzó la Segunda Guerra Mundial?",
    answers: [
      { id: "1", text: "1936" },
      { id: "2", text: "1939", correct: true },
      { id: "3", text: "1942" },
      { id: "4", text: "1945" },
    ],
  },
  {
    question: "¿Cuál es la capital de Australia?",
    answers: [
      { id: "1", text: "Sídney" },
      { id: "2", text: "Melbourne" },
      { id: "3", text: "Brisbane" },
      { id: "4", text: "Canberra", correct: true },
    ],
  },
];
### EXTRAS
no son obligatorios quizás los usamos más adelante

## Ejercicio 2
Currency Converter
Crear un componente CurrencyConverter que

renderice dos input
a medida que se escribe en el input, actualice el otro input con el precio convertido.
La conversion debe ser de ARS a USD
demo

## Ejercicio 3

SearchList
Crear un componente SearchList que

renderice un input y una lista (ul con li)
tome la prop items, que es un array de strings
renderice cada item como li dentro del ul
a medida que se escribe en el input, actualice la lista mostrando los items que contengan como substring lo ingresado. (p. ej.: si se ingresa "java" debe mostrarse "javascript")
la lista al realizar la búsqueda debe mostrarse ordenada alfabéticamente
cuando el input está vacío, debe mostrar la lista normal con todos los ítems
EXTRA: si se ingresa algo en la búsqueda, resalta en cada ítem la substring ingresada, por ejemplo, si se ingresa java, javascript debería aparecer como: javascript

EXTRA 2: Agregar un boton para poder eliminar un item de la lista