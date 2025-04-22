![image](https://github.com/user-attachments/assets/05f08444-46dc-422b-abc3-a8e6ac9727aa)


# Cine Search 🎬

A simple web application built with React and Vite that allows users to search for movies using the [OMDB API](http://www.omdbapi.com/).

### Features

- Search movies by title.
- Debounced search input for optimized API calls.
- Displays movie posters, titles, and years.
- Handles loading and error states gracefully.
- Styled with Tailwind CSS and Skeleton UI.

### Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Skeleton UI](https://www.skeleton.dev/)
- JavaScript

### Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd app-peliculas
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**

    - Create a file named `.env` in the root directory of the project.
    - Add the following environment variable. You need to get your own API key from [OMDB API](http://www.omdbapi.com/apikey.aspx).
      ```properties
      # Replace <your-omdb-api-key> with your actual key
      VITE_API_URL=http://www.omdbapi.com/?apikey=<your-omdb-api-key>&s=
      ```
    - **Important:** The `.env` file is included in `.gitignore` to prevent exposing your API key.

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code using ESLint.
- `npm run preview`: Serves the production build locally.

---

Una aplicación web sencilla construida con React y Vite que permite a los usuarios buscar películas utilizando la [API de OMDB](http://www.omdbapi.com/).

### Características

- Búsqueda de películas por título.
- Entrada de búsqueda con "debounce" para optimizar las llamadas a la API.
- Muestra pósters, títulos y años de las películas.
- Manejo de estados de carga y errores.
- Estilizado con Tailwind CSS y Skeleton UI.

### Tecnologías Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Skeleton UI](https://www.skeleton.dev/)
- JavaScript

### Configuración e Instalación

1.  **Clona el repositorio:**

    ```bash
    git clone <url-de-tu-repositorio>
    cd app-peliculas
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las Variables de Entorno:**

    - Crea un archivo llamado `.env` en el directorio raíz del proyecto.
    - Añade la siguiente variable de entorno. Necesitas obtener tu propia clave API desde [OMDB API](http://www.omdbapi.com/apikey.aspx).
      ```properties
      # Reemplaza <tu-clave-api-omdb> con tu clave real
      VITE_API_URL=http://www.omdbapi.com/?apikey=<tu-clave-api-omdb>&s=
      ```
    - **Importante:** El archivo `.env` está incluido en `.gitignore` para evitar exponer tu clave API.

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (u otro puerto si el 5173 está ocupado).

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila la aplicación para producción.
- `npm run lint`: Analiza el código con ESLint.
- `npm run preview`: Sirve la compilación de producción localmente.
