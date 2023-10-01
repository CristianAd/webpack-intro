async function obtenerUsuarios() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuesta.ok) {
        throw new Error('Error al obtener los usuarios');
      }
  
      const usuarios = await respuesta.json();
      return usuarios;
    } catch (error) {
      console.error('Ha ocurrido un error:', error);
      throw error;
    }
  }
  
  // Ejemplo de uso:
  obtenerUsuarios()
    .then((usuarios) => {
      console.log('Usuarios:', usuarios);
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
  