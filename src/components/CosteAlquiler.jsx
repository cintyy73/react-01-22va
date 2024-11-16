const title = {
  color: "green",
};
const coste = 40;

export const CosteAlquiler = ({ night }) => {

  let costeTotal = night * coste;

  if (night >= 3 && night < 7) {
    costeTotal -= 20;
  } else if (night >= 7) {
    costeTotal -= 50;
  }



  return (
    <div>
      <h3>Coste Alquiler de coche</h3>
      <p style={title}>
        El coste de alquiler de coche por {night} noches es :{" "}
        <span style={{ color: "red" }}>{costeTotal}</span>
      </p>
    </div>
  );
};
