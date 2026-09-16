=====================================================================
 SPD Estudio — 8086/8088 (versión de escritorio)
=====================================================================


App de estudio para la materia SPD, con dos secciones:

- **Resumen teórico**: las 8 unidades, con las imágenes originales de las diapositivas
  insertadas donde corresponde, y un buscador para encontrar un término rápido.

- **Práctica**: preguntas de opción múltiple armadas a partir de un análisis de
  parciales anteriores, filtrables por parcial (1 o 2) y por tema, con corrección
  inmediata y puntaje final.


=====================================================================
Instalación 
=====================================================================

1. Si todavía no tenés Node.js, instalalo desde https://nodejs.org (versión LTS).
2. Descomprimí esta carpeta y abrí una terminal dentro de ella.
3. Corré:
   ```
   npm install
   ```
4. Para probarla:
   ```
   npm start
   ```
5. Para generar el instalador (`.exe` en Windows, `.dmg` en Mac):
   ```
   npm run dist
   ```
   El instalador queda dentro de la carpeta `dist/`.

> Recordá: el `.exe` se genera corriendo el comando en Windows, y el `.dmg` corriendo
> el comando en una Mac.

Actualizar el contenido más adelante

Todo el contenido teórico y las preguntas de práctica están en el archivo
`content.js`, en dos listas de JavaScript: `RESUMEN` (las unidades) y `QUIZ` (el
banco de preguntas). Podés agregar más preguntas copiando el formato de una
existente, sin tocar nada de `index.html`.

Las imágenes están en `assets/img/`. Si agregás una nueva, se referencia en
`content.js` como `./assets/img/nombre.png`.
