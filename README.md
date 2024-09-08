# Login y Registro con Angular y MongoDB

Este proyecto es una aplicación de autenticación simple (login y registro) creada con **Angular** para el frontend, **Tailwind CSS** para el diseño, y **MongoDB** como base de datos. Fue generado utilizando [Angular CLI](https://github.com/angular/angular-cli) versión 17.3.9.

## Características principales

- **Frontend**: Angular + Tailwind CSS
- **Backend**: Node.js + MongoDB
- **Autenticación**: Registro y login con manejo de contraseñas encriptadas
- **Seguridad**: Uso de `simple-encryptor` para la encriptación de datos sensibles
- **Personalizable**: El nombre de la base de datos MongoDB puede modificarse fácilmente en el archivo de configuración del backend.

## Pasos para usar el proyecto

### 1. Instalar las dependencias del proyecto

```bash
npm install
```
Este comando instalará todas las dependencias listadas en el archivo `package.json` necesarias para ejecutar el proyecto.

### 2. Instalar Angular Common

```bash
npm install @angular/common
```
`@angular/common` proporciona funcionalidades clave como directivas y servicios esenciales para Angular.

### 3. Instalar Tailwind CSS y sus dependencias

```bash
npm install -D tailwindcss postcss autoprefixer
```
Este comando instala **Tailwind CSS** junto con herramientas para procesar y asegurar la compatibilidad de los estilos CSS. Las dependencias se instalan como herramientas de desarrollo con el indicador `-D`.

### 4. Inicializar Tailwind CSS

```bash
npx tailwindcss init
```
Este comando genera un archivo `tailwind.config.js` donde puedes personalizar las configuraciones de Tailwind CSS.

### 5. Instalar CORS

```bash
npm install cors
```
`cors` es un middleware que habilita el uso de **CORS** (Cross-Origin Resource Sharing) en el backend, permitiendo que el servidor acepte solicitudes desde el frontend.

### 6. Instalar Simple Encryptor

```bash
npm install simple-encryptor
```
`simple-encryptor` es una librería que permite encriptar datos sensibles como contraseñas antes de almacenarlos en la base de datos.

---

## Comandos útiles

### Servidor de desarrollo

```bash
ng serve
```
Este comando inicia un servidor de desarrollo. Visita `http://localhost:4200/` para ver la aplicación. Los cambios en los archivos fuente recargarán automáticamente la aplicación.

### Crear nuevos componentes

```bash
ng generate component component-name
```
Utiliza este comando para generar un nuevo componente en Angular. También puedes usar `ng generate` seguido de otras entidades como `directive|pipe|service|class|guard|interface|enum|module`.

### Compilar el proyecto

```bash
ng build
```
Compila la aplicación para producción. Los archivos compilados se almacenarán en el directorio `dist/`.

### Ejecutar pruebas unitarias

```bash
ng test
```
Este comando ejecuta las pruebas unitarias utilizando [Karma](https://karma-runner.github.io).

### Pruebas end-to-end

```bash
ng e2e
```
Ejecuta pruebas end-to-end (E2E). Antes de usar este comando, asegúrate de agregar un paquete que implemente esta funcionalidad.

---

## Instrucciones adicionales

- **MongoDB**: Asegúrate de tener MongoDB ejecutándose y configurado correctamente. Modifica los detalles de conexión, como el nombre de la base de datos y credenciales, en el backend (por ejemplo, en `mongoose.connect()`).
  
- **Tailwind CSS**: Puedes personalizar el diseño y estilos en el archivo `tailwind.config.js`.

---

![image](https://github.com/user-attachments/assets/93bfb49d-4168-493b-87c6-dde4da653407)

---
![image](https://github.com/user-attachments/assets/4556c48e-ee7a-41c4-aaf8-7011a68eb1b2)

