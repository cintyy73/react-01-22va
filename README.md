# Clase 11

## Ejercicio 1 Carousel

- Crear un carrusel de imágenes que permita al usuario desplazarse a través de una serie de imágenes.
- Debe mostrar una imagen grande y tener flechas para avanzar y retroceder a través de las imágenes.
- Crear un array con el siguiente formato:
```
  const elements = [
        {
          id: 1,
          src: "https://cdn.pixabay.com/photo/2017/11/29/19/14/drop-2986878_1280.jpg",
          alt: "Imagen 1"
        },
        {
          id: 2,
          src: "https://cdn.pixabay.com/photo/2017/06/20/04/49/fall-2421781_960_720.jpg",
          alt: "Imagen 2"
        },
        {
          id: 3,
          src: "https://media.istockphoto.com/id/157672191/es/foto/splash.jpg?s=1024x1024&w=is&k=20&c=yV2P3f5UpA6kYi9OTNSgksahT2qxWlo0G8evR2tUpd0=",
          alt: "Imagen 3"
        },
      ];
```
fuente para obtener imágenes => https://pixabay.com/

### Extra hacer que el carrousel sea infinito.

## Ejercicio 2 Semaforo

- Crear un componente `TrafficLight` en el que va a renderizar con estilos a un semaforo y sus luces
- Crear un componente `Light` debe mostrar cada uno de los colores del semaforo (rojo,amarillo,verde)
- Las luces estaran apagadas(bg: gris) pero al hacer click en cada una se cambiara el color de fondo


## Ejercicio 3 Grados centígrados 

- Definir un componente App que contendrá un único componente llamado Form. Este componente recogerá los grados centígrados introducidos, procesará la respuesta y la mostrará por pantalla.
- Para ello deberé multiplicar por 9/5 y sumar 32.
- 20 grados centígrados son 68 grados Farenheit.

## Ejercicio 4 Elevando Estado 

- Programa una aplicación con dos componentes.
- En uno de ellos, el usuario escribirá dos números y se calculará su suma.
- Ese componente, enviará el resultado de la operación al componente padre que a su vez se la enviará al segundo componente que será el encargado de mostrar la solución.

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