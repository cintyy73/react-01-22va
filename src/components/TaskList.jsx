import { useState } from "react";

export const TaskList = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    if(task.trim()){
    setTaskList([...taskList, task]);
    setTask("");
}
  };

  return (
    <div>
      <h1>Lista de tareas</h1>
      <form onSubmit={addTask}>
        <label htmlFor="task">Tarea</label>
        <input
          type="text"
          id="task"
          name="task"
          placeholder="Ingrese una tarea..."
          value={task}
          autoComplete="off"
          onChange={handleChangeTask}
        />
        <button type="submit">Agregar a la lista</button>
        <button onClick={() => setTaskList([])}>Borrar toda la lista</button>
      </form>
      <ul>
        {taskList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};
