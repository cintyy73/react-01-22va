
export const FormNoControlado = () => {

  return (
   <>
    <h3>Form NO Controlado</h3>
    <form onSubmit={(e)=>{
        e.preventDefault()

        console.log({"nombre:":e.target.nombre.value, "apellido":e.target.apellido.value})
        }} >
        <label htmlFor="nombre" >Nombre</label>
        <input id="nombre" type="text" name="nombre" autoComplete="off"/>
        <label htmlFor="apellido" >apellido</label>
        <input id="apellido" type="text" name="apellido" autoComplete="off"/>
        <button>Enviar </button>
    </form>
    </>
  )
}
