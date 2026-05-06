const args = process.argv.slice(2); // Obtenemos los argumentos desde la terminal ignorando los 2 primeros (node y archivo)

const metodo = args[0];     // GET, POST, DELETE
const recurso = args[1];    // products o products/15
const extra = args.slice(2); // datos extra para POST

const BASE_URL = "https://fakestoreapi.com/"; //de aqui tomaremos informacion ficticia

async function main() {
  try {
    // ===== INICIA LOGICA PRINCIPAL =====

    // ================= GET =================
    if (metodo === "GET") { 
      const response = await fetch(BASE_URL + recurso); // hacemos la peticion a la API
      const data = await response.json();   // convertimos la respuesta a JSON

      // mostramos solo id, title y price
      if (Array.isArray(data)) {
        const tabla = data.map(p => ({   // mapeamos cada producto a un nuevo objeto con solo los campos que nos interesan
          id: p.id,
          title: p.title,
          price: p.price
        }));

        console.table(tabla);  // mostramos la tabla con los productos
      } else {
        console.table([{
          id: data.id,
          title: data.title,
          price: data.price
        }]);
      }
    }

    // ================= POST =================
    else if (metodo === "POST") {  // para crear un nuevo producto necesitamos title, price y category
      const [title, price, category] = extra; // extra es un array con los datos adicionales, los asignamos a variables

      const response = await fetch(BASE_URL + recurso, { // hacemos la peticion a la API para crear un nuevo producto
        method: "POST",
        headers: {
          "Content-Type": "application/json"  // indicamos que el cuerpo de la petición es JSON
        },
        body: JSON.stringify({  // convertimos el objeto a JSON para enviarlo en el cuerpo de la petición
          title,
          price: Number(price),
          category
        })
      }); 

      const data = await response.json(); // convertimos la respuesta a JSON
      console.log("Producto creado:", data.id); // mostramos el id del nuevo producto creado
    }

    // ================= DELETE =================
    else if (metodo === "DELETE") {
      const response = await fetch(BASE_URL + recurso, {   // hacemos la peticion a la API para eliminar un producto
        method: "DELETE"  // indicamos que el método de la petición es DELETE
      });

      const data = await response.json(); // convertimos la respuesta a JSON
      console.log("Producto eliminado:", data);  // mostramos la respuesta de la API, que suele ser un mensaje de confirmación o el producto eliminado
    }

    // ================= COMANDO INVALIDO =================
    else {
      console.log("Comando no reconocido"); // si el método no es GET, POST o DELETE, mostramos un mensaje de error
    }

    // ===== FINALIZA LOGICA PRINCIPAL =====

  } catch (error) {   // si ocurre un error en cualquier parte del código dentro del try, lo capturamos aquí
    console.error("Error:", error.message);   
  }
}

main(); // ejecuta la funcion principal