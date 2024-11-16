import { useState } from "react";
import "./App.css";
import { CosteAlquiler } from "./components/CosteAlquiler";
import { CosteHotel } from "./components/CosteHotel";
import { Button1 } from "./buttons/Button1";
import { Button2 } from "./buttons/Button2";

function App() {
  const [night, setNight] = useState(0);

  const handleNight = (e) => {
    setNight(e.target.value);
  };
  return (
    <div >
      <h1 className="prueba">Calculadora de costo de viaje</h1>
      <div>
        <label htmlFor="night">Cantidad de noches</label>
        <input
          type="number"
          min="1"
          value={night}
          id="night"
          onChange={handleNight}
          placeholder="Introduce la cantidad de noches"
        />

      </div>
      <CosteAlquiler night={night} />
      <CosteHotel night={night} />
      <Button1 />
      <Button2 />

    </div>
  );
}

export default App;
