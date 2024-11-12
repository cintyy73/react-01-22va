import { useState } from "react";
import { students } from "./database";
// import { SubString } from "./SubString";
import { StringRed } from "./StringRed";

export const List = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState (students)
//   const handleRemove = (element) => {
//     setData((prev)=>prev.filter((student) => student !== element));
//   };
  
  const handleSearch = (e) => {
      setSearch(e.target.value);
     const dataFilter = students.filter((student)=>student.toLowerCase().includes(e.target.value.toLowerCase()))

     const dataSort = dataFilter.sort((a, b) =>a.localeCompare(b))

     setData(dataSort)
  };
  

  return (
    <div>
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        autoComplete="off"
        placeholder="Ej. Melina"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {/* <SubString data={data} handleRemove={handleRemove} /> */}
      {data.map((element)=> <StringRed key={element}  element={element} search={search }/>) }
      </ul>
    </div>
  );
};
