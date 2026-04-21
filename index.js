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
      const response = await fetch(BASE_URL + recurso);
      const data = await response.json();

      // mostramos solo id, title y price
      if (Array.isArray(data)) {
        const tabla = data.map(p => ({
          id: p.id,
          title: p.title,
          price: p.price
        }));

        console.table(tabla);
      } else {
        console.table([{
          id: data.id,
          title: data.title,
          price: data.price
        }]);
      }
    }

    // ================= POST =================
    else if (metodo === "POST") {
      const [title, price, category] = extra;

      const response = await fetch(BASE_URL + recurso, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          price: Number(price),
          category
        })
      });

      const data = await response.json();
      console.log("Producto creado:", data.id);
    }

    // ================= DELETE =================
    else if (metodo === "DELETE") {
      const response = await fetch(BASE_URL + recurso, {
        method: "DELETE"
      });

      const data = await response.json();
      console.log("Producto eliminado:", data);
    }

    // ================= COMANDO INVALIDO =================
    else {
      console.log("Comando no reconocido");
    }

    // ===== FINALIZA LOGICA PRINCIPAL =====

  } catch (error) {
    console.error("Error:", error.message);
  }
}

main(); // ejecuta la funcion principal