## Ejercicio 5 Coste hotel.

Haremos una aplicación para calcular el coste de un viaje. Para ello desarrollaremos un componente App que tomarará del usuario el número de noches.

Recogeremos el número de noches, utilizando `useState()`.

Luego le pasaremos este valor como prop a dos componentes:

Componente CosteHotel:

- múltiplica el número de noches por los 140usd que cuesta cada noche.

Componente CosteAlquiler:

- Cada día de alquiler cuesta 40 usd.
- Si alquilas un coche por 3 días o más, obtienes un descuento de 20usd sobre el total.
- Si alquilas un coche por 7 días o más, obtienes un descuento de 50usd sobre el total (no acumulable con los 20usd de haber alquilado por más de 3 días).