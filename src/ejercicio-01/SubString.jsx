/* eslint-disable react/prop-types */

export const SubString = ({ data, handleRemove }) => {


  return (
    <div>
      {data.map((element, index) => (
        <li key={`${index}+${element}`}>
          <p>{element}</p>
          <button onClick={() => handleRemove(element)}>Eliminar..</button>
        </li>
      ))}
    </div>
  );
};
