/* eslint-disable react/prop-types */

export const StringRed = ({ element, search }) => {
    if(!search || search.length === 0){
        return <p>{element}</p>
    }
  const textArray = element.split(new RegExp(`(${search})`, "i"));

  return (
    <li>
      {textArray.map((fragment, index) => (
        <span
          key={index}
          style={
            fragment.toLowerCase() === search.toLowerCase()
              ? { color: "red", fontWeight: "bold" }
              : {}
          }
        >
          {fragment}
        </span>
      ))}
    </li>
  );
};
