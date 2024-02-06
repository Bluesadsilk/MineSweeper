# Buscaminas - Juego en React

Bienvenido/a al proyecto del juego del Buscaminas implementado en React. Este proyecto es parte de mi trabajo para la clase de Lenguaje de Marcas.

## Descripción

El Buscaminas es un juego clásico de computadora en el que el jugador debe despejar un campo minado sin detonar ninguna mina. El campo minado está representado por un tablero cuadriculado donde cada celda puede contener una mina o un número que indica la cantidad de minas adyacentes a esa celda. El jugador debe utilizar pistas numéricas y lógica para determinar qué celdas contienen minas y cuáles están seguras para despejar.

## Funcionalidades

- **Generación de tablero:** El tablero se genera de manera aleatoria al iniciar el juego, con una cantidad definida de filas, columnas y minas.
- **Interfaz interactiva:** Los jugadores pueden hacer clic en las celdas para descubrir si contienen una mina o un número, y también pueden marcar las celdas sospechosas de contener minas.
- **Gestión de estado:** El juego mantiene un estado interno que registra las celdas descubiertas, las celdas marcadas como minas y el estado del juego (ganado, perdido o en progreso).
- **Indicadores de progreso:** Se proporcionan indicadores visuales para informar al jugador sobre su progreso y el resultado del juego.
- **Opciones personalizables:** Los jugadores pueden ajustar la configuración del juego, como el tamaño del tablero y la cantidad de minas, para adaptarse a sus preferencias.

## Instalación y Uso

1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener Node.js instalado en tu sistema.
3. En la raíz del proyecto, ejecuta `npm install` para instalar las dependencias.
4. Una vez instaladas las dependencias, ejecuta `npm start` para iniciar la aplicación.
5. Abre tu navegador web y navega a `http://localhost:3000` para jugar al Buscaminas.

## Tecnologías Utilizadas

- React.js (Javascript + SWC)
- HTML5
- CSS3

## Contribuir

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/improvement`).
3. Realiza tus cambios y commitéalo (`git commit -am 'Añade nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/improvement`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la licencia [MIT](https://opensource.org/licenses/MIT).
