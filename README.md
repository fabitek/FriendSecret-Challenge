# Amigo Secreto

Este proyecto es una aplicación web para gestionar y sortear amigos secretos.

## Instalación

1. Clona el repositorio:
    ```sh
    git clone https://github.com/fabitek/FriendSecret-Challenge.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd FriendSecret-Challenge
    ```

## Dependencias

Este proyecto no tiene dependencias externas. Solo necesitas un navegador web para ejecutarlo.

## Cómo ejecutar el proyecto

1. Abre el archivo [index.html](http://_vscodecontentref_/0) en tu navegador web.

2. Ingresa los nombres de los amigos en el campo de texto y haz clic en "Agregar amigo".

3. Para sortear un amigo, haz clic en "Sortear amigo".

## Posibles problemas y soluciones

### Problema: No se muestra la lista de amigos
- **Solución**: Asegúrate de que el contenedor de la lista de amigos esté presente en tu HTML:
    ```html
    <ul id="listaAmigos"></ul>
    ```

### Problema: Error "Cannot set properties of null"
- **Solución**: Asegúrate de que el elemento con el ID `resultado` esté presente en tu HTML:
    ```html
    <p id="resultado"></p>
    ```

### Problema: No se puede empujar cambios al repositorio remoto
- **Solución**: Asegúrate de haber hecho un pull de los cambios remotos antes de empujar:
    ```sh
    git pull origin main --allow-unrelated-histories
    git push -u origin main
    ```

Si tienes algún otro problema, por favor revisa la documentación de Git o contacta al administrador del proyecto.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para más detalles.
