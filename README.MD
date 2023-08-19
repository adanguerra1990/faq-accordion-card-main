# FAQ accordion card - HTML CSS JAVASCRIPT
![](design/deskto.jpg)
![](design/mobile.jpg)

## Explicaion codigo JavaScript

Este código JavaScript está diseñado para manejar un conjunto de preguntas y respuestas, probablemente en un formato de preguntas frecuentes (FAQ) o algo similar. Aquí está el paso a paso de cómo funciona:

1. Primero, selecciona todos los elementos con la clase 'pregunta' en el documento y los almacena en la variable `preguntas`. Estos elementos representan las preguntas individuales en la página.

2. Luego, para cada pregunta en `preguntas`, se agrega un evento de 'click' a la pregunta. Esto significa que cuando se hace clic en la pregunta, se ejecutará la función que se pasa al método `addEventListener`.

3. Dentro de esta función, se recorren todas las preguntas nuevamente. Para cada pregunta, se seleccionan tres elementos: la respuesta asociada a la pregunta (un elemento con la clase 'respuesta'), un icono de flecha (un elemento con la clase 'icono-flecha') y el título de la pregunta (un elemento con la clase 'titulo-pregunta').

4. Luego, se verifica si la pregunta en la que se hizo clic es la misma que la pregunta que se está procesando actualmente y si la respuesta a esa pregunta está oculta (es decir, su propiedad `display` de estilo es 'none'). Si ambas condiciones son verdaderas, se muestra la respuesta, se rota el icono de la flecha 180 grados, se agrega la clase 'mostrar' a la respuesta y se cambia el peso de la fuente del título de la pregunta a 700.

5. Si alguna de las condiciones no es verdadera, se oculta la respuesta, se rota el icono de la flecha a su estado original, se elimina la clase 'mostrar' de la respuesta y se cambia el peso de la fuente del título de la pregunta a normal.

En resumen, este código permite que cuando se haga clic en una pregunta, se muestre su respuesta y se oculten las respuestas a todas las demás preguntas. Además, se cambia el icono de la flecha y el peso de la fuente del título de la pregunta para indicar visualmente qué pregunta está actualmente seleccionada.