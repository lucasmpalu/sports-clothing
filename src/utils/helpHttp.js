export const helpHttp = () => {
    // Función personalizada para realizar peticiones fetch
    //endpoint es la URL para realizar la petición, options son
    const customFetch = (endpoint, options) => { 
      // Opciones predeterminadas para la cabecera
      const defaultHeader = {
        //ACCEPT -> LE DIGO AL SERVIDOR EN QUE FORMATO QUIERO RECIBIR MI SOLICITUD
        accept: 'application/json',
        
        //⚠️Porque no ponerle content-type? Porque algunas apps no lo necesitan y no se volvería reutilizable mi helphttp

        // CONTENT-TYPE -> Se utiliza para indicar el tipo de contenido que se está enviando al servidor en la solicitud.
        //  Por ejemplo, si estás enviando datos en formato JSON en el cuerpo de la solicitud, incluirás Content-Type: application/json.
        'Content-Type': 'application/json',
    
        // Authorization -> La api me proporciona el token de acceso y yo lo voy a incluir acá, si la API se maneja así    
        // Authorization: 'Bearer miTokenDeAcceso'
        // veamos otro token de acceso 👇
        // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
      };
  
      // Crear un controlador de AbortController para cancelar la petición si es necesario
      const controller = new AbortController();
      options.signal = controller.signal;
      // Si hay opciones de cabecera, combinarlas con las predeterminadas; de lo contrario, usar las predeterminadas
      options.header = options.header 
        ? { ...defaultHeader, ...options.headers } 
        : defaultHeader;
  
      // Convertir el cuerpo a formato JSON si existe
      // En el body por ejemplo, pondré jugador: blabla, club: blabla
      options.body = JSON.stringify(options.body) || false;
      // Si no hay cuerpo, eliminar la propiedad 'body'
      if (!options.body) delete options.body;
  
      // Configurar un temporizador para abortar la petición después de 1000 milisegundos (1 segundo)
      setTimeout(() => {
        controller.abort();
      }, 1000);
  
      // Realizar la petición fetch y manejar la respuesta
      return fetch(endpoint, options)
            .then((res) => 
            res.ok
                ? res.json() // Si la propiedad 'ok' de res es verdadera, parsear la respuesta a JSON
                : Promise.reject({ 
                    err: true,
                    status: res.status || '00', // Si no hay un código de estado, poner '00'
                    statusText: res.statusText || "Ocurrió un error"
                })
            )
            .catch((err) => err); // Manejar errores de la petición
    };

    // GET para obtener la lista de tareas.
    // POST para agregar una nueva tarea.
    // PUT para actualizar los detalles de una tarea existente.
    // DELETE para eliminar una tarea.
  
    // Métodos de la arquitectura REST
    const get = (url, options = {}) => {
      // Realizar una petición GET
      options.get = 'GET'
     
      return customFetch(url, options);
    };
  
    const post = (url, options = {}) => {
      // Configurar el método como POST y realizar la petición
      options.method = 'POST';
      return customFetch(url, options);
    };
  
    const put = (url, options = {}) => {
      // Configurar el método como PUT y realizar la petición
      options.method = 'PUT';
      return customFetch(url, options);
    };
  
    const del = (url, options = {}) => {
      // Configurar el método como DELETE y realizar la petición
      options.method = 'DELETE';
      return customFetch(url, options);
    };
    // Devolver los métodos para realizar peticiones GET, POST, PUT y DELETE
    return {
      get,
      post,
      put,
      del
    };
  };