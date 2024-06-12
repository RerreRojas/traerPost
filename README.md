# Fetch and Display Posts

Este proyecto es un simple script en JavaScript que obtiene datos de una API y los muestra en una página web. Utiliza `fetch` para realizar una solicitud a una API pública, convierte la respuesta a JSON y luego manipula el DOM para mostrar los datos en la página web.

## Descripción del Código

El código consta de una función principal `getPosts` que realiza las siguientes tareas:

1. **Fetch Data**: Utiliza `fetch` para obtener datos de la API `https://jsonplaceholder.typicode.com/posts`.
2. **Convert to JSON**: Espera a que la respuesta se convierta a JSON.
3. **Display Data**: Manipula el DOM para mostrar los datos en una sección específica de la página web.

### Función Principal

```javascript
async function getPosts() {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ); // Espera a que la petición se cumpla
    const data = await apiResponse.json(); // Espera a que se convierta a JSON

    // Paso 2 => Mostrar el contenido en el html = MANIPULAR EL DOM = AGARRAR ETIQUETAS!
    const postSection = document.getElementById("post-data");

    data.forEach((post) => {
      let postItem = `
        <ul>
          <li>
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          </li>
        </ul>
      `;
      postSection.innerHTML += postItem;
    });
  } catch (error) {
    console.error("Error fetching or displaying posts:", error);
  }
}
```
