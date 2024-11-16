import style from './Components.module.css'

export const CosteHotel = ({ night }) => {
  console.log(style.prueba)
  console.log(style.test)
  console.log(style)


  const coste = 140;

  let costeTotal = night * coste;
  return (
    <div>
      <h3 className={style.test}>Costo total de estadía</h3>
      <p className={style.prueba}>
        El coste de su estadía por {night} noches es : $
        <span style={{ color: "red" }}>{costeTotal}</span>
      </p>
    </div>
  );
};
