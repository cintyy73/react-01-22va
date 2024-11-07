import { useState } from "react";
import { questions } from "./dataBase";

export const Card = () => {
  const [optionSelected, setOptionSelected] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { question, answers } = questions[currentQuestion];
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateAnswer = (e) => {
    e.preventDefault();
    if (!optionSelected) {
      alert("Debes elegir una opción!! ");
      return // el return corta la ejecución y no hay bug al comparar  en la siguiente línea un optionSelected que es un string vacío
    }else{
        console.log('error')
    }
    //find me devuelve el elemento o un undefined con la condición dada
    const answer = answers.find((answer) => answer.id === optionSelected);

    // index 0, 1, 2
    // .length 1, 2, 3
    if (answer.correct) {
      setSuccess(true);
      setError(false);
      console.log(currentQuestion, questions.length);

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion((prev) => prev + 1);
        setOptionSelected("");
      }
    } else {
      console.log("incorrecto");
      setError(true);
      setSuccess(false);
    }
  };

  return (
    <div className="card">
      <h2>Preguntas y Respuestas</h2>
      <p>{question}</p>
      <form onSubmit={validateAnswer}>
        <select
          onChange={(e) => {
            setOptionSelected(e.target.value);
          }}
        >
          <option>Seleccionar..</option>
          {answers.map(({ id, text }) => (
            <option value={id} key={id}>
              {text}
            </option>
          ))}
        </select>
        {error && (
          <div style={{ backgroundColor: "red" }}>
            <p>Su respuesta es incorrecta... Selecione otra opción</p>
          </div>
        )}
        {success && (
          <p style={{ backgroundColor: "green" }}>Su repuesta es correcta</p>
        )}

        <button type="submit">Ok</button>
      </form>
    </div>
  );
};
