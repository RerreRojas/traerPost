async function fetchAndDisplayPosts() {
  try {
    const apiResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ); //🛑 con await espera a que la petición se cumpla
    const data = await apiResponse.json(); //🛑 con await espera a que se convierta a json

    // Paso 2 => Mostrar el contenido en el html = MANIPULAR EL DOM = AGARRAR ETIQUETAS!
    const postSection = document.getElementById("post-data");

    data.forEach((post) => {
      let postItem = `
          <ul>
            <li>
              <h5>${post.title}</h5>
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

// Llamar a la función para ejecutar el código
fetchAndDisplayPosts();
