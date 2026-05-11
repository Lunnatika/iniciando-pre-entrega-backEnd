# Pre-Entrega Backend

Aplicación de consola desarrollada en Node.js que consume la API pública de Fake Store API para realizar operaciones básicas utilizando los métodos HTTP `GET`, `POST` y `DELETE`.

Repositorio: [GitHub del proyecto](https://github.com/Lunnatika/iniciando-pre-entrega-backEnd.git?utm_source=chatgpt.com)

---

# Tecnologías utilizadas

* Node.js
* JavaScript (ES Modules)
* Fake Store API
* Express

---

# Instalación y ejecución

## 1. Clonar el repositorio

```bash
git clone https://github.com/Lunnatika/iniciando-pre-entrega-backEnd.git
```

## 2. Ingresar a la carpeta del proyecto

```bash
cd iniciando-pre-entrega-backEnd
```

## 3. Instalar dependencias

```bash
npm install
```

## 4. Ejecutar el proyecto

```bash
npm start
```

---

# Estructura del proyecto

```bash
PRE-ENTREGA-BACK-END/
│
├── node_modules/
├── index.js
├── package.json
└── package-lock.json
```

---

# Funcionalidades

La aplicación permite realizar operaciones sobre productos utilizando argumentos desde la terminal.

## Métodos implementados

### GET

Obtiene productos desde la API y muestra:

* id
* title
* price

### POST

Crea un nuevo producto enviando:

* title
* price
* category

### DELETE

Elimina un producto por ID.

---

# Uso desde la terminal

## Obtener todos los productos

```bash
node index.js GET products
```

## Obtener un producto específico

```bash
node index.js GET products/1
```

---

## Crear un producto

```bash
node index.js POST products "Camisa" 25 ropa
```

### Ejemplo de respuesta

```bash
Producto creado: 21
```

---

## Eliminar un producto

```bash
node index.js DELETE products/1
```

### Ejemplo de respuesta

```bash
Producto eliminado: { ... }
```

---

# API utilizada

Este proyecto consume datos desde:

[Fake Store API](https://fakestoreapi.com/?utm_source=chatgpt.com)

---

# Manejo de errores

La aplicación utiliza bloques `try/catch` para capturar y mostrar errores en consola.

Ejemplo:

```bash
Error: mensaje del error
```

---

# Scripts disponibles

## Iniciar aplicación

```bash
npm start
```

---

# Autor

Proyecto realizado por GitHub user: **Lunnatika**

Perfil:
[Perfil de GitHub](https://github.com/Lunnatika?utm_source=chatgpt.com)

---

# Mejoras futuras

* Implementar método `PUT`
* Validaciones de datos
* Uso completo de Express
* Variables de entorno
* Separación en módulos
* Tests automatizados
* Persistencia con base de datos

---

# Licencia

Este proyecto se distribuye bajo licencia ISC.
