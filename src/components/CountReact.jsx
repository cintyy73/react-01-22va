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
