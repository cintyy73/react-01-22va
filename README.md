# React Ejercicio 1

Este proyecto es un ejercicio básico de React para practicar la creación de componentes, el manejo de listas y la validación de datos.

## Requisitos

- Crear una aplicación en React utilizando Vite.
- Limpiar el proyecto inicial generado por Vite.
- Crear un archivo con el siguiente array de tareas y guardarlo en la carpeta correspondiente del proyecto:

  ```javascript
  export const tasks = [
    {
      id: 1,
      title: 'Buy a new gaming laptop',
      done: false,
    },
    {
      id: 2,
      title: 'Complete a previous task',
      done: false
    },
    {
      id: 3,
      title: 'Create video for Youtube',
      done: true,
    },
    {
      id: 4,
      title: 'Create a new portfolio site',
      done: false,
    },
  ];

  Crear los componentes necesarios para mostrar una lista con cards de tareas
- Validar cuando no existe el array.
- Si el array esta vacio mostrar un mensaje No hay tareas, vuelva mas tarde.
- Si la tarea esta completada done= true esta misma tiene que estar tachada.
- mostrar la cantidad de tareas You have "4" pending tasks, el 4 tiene que ser dinamico.
- Dar estilos con CSS.

[![Ejemplo de Lista de Tareas](https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp)
