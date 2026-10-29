# Sandbox Visión Inmobiliaria

Entorno de práctica estático basado en “Visión Inmobiliaria — Vive la experiencia”. La interfaz usa HTML5, CSS3 y JavaScript vanilla; Node.js ofrece un servidor local sin dependencias externas.

## Estructura

- `index.html`: página principal del sandbox.
- `css/styles.css`: estilos extraídos de la maqueta adjunta.
- `js/main.js`: acceso rápido del chat y confirmaciones locales de los formularios.
- `server.js`: servidor HTTP local implementado con módulos nativos de Node.js.
- `package.json`: comando de inicio del servidor.
- `assets/icons/logo.jpg` y `assets/icons/koddy.png`: recursos gráficos locales extraídos del adjunto.
- `assets/img/`: espacio para imágenes locales. La maqueta conserva sus imágenes de propiedades remotas.
- `assets/fonts/`: espacio para fuentes locales. Actualmente Outfit y Work Sans se cargan desde Google Fonts.
- `.vscode/extensions.json`: sugerencias de extensiones para VS Code.

## Ejecutar con Node.js

Requiere Node.js 18 o posterior. Desde la raíz del proyecto ejecuta:

```bash
npm start
```

Abre `http://127.0.0.1:3000`. Para cambiar el puerto, define la variable de entorno `PORT` antes de iniciar el servidor.

## Pruebas

Usa las herramientas de desarrollador del navegador (`F12`) para inspeccionar la consola, los recursos y los tamaños de escritorio, tablet y móvil. Los formularios solo muestran una confirmación local: no envían datos ni se conectan a un backend.

Las fuentes de Google requieren conexión a internet. Los formularios son demostrativos: no envían datos ni se conectan a un backend.
