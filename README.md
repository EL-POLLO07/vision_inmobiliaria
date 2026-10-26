# Sandbox Visión Inmobiliaria

Entorno estático de práctica basado en el archivo adjunto “Visión Inmobiliaria — Vive la experiencia”. El archivo `vision-inmobiliaria.html` del workspace permanece sin modificaciones.

## Estructura

- `index.html`: página principal del sandbox.
- `css/styles.css`: estilos extraídos de la maqueta adjunta.
- `js/main.js`: acceso rápido del chat a la sección de contacto.
- `assets/icons/logo.jpg` y `assets/icons/koddy.png`: recursos gráficos locales extraídos del adjunto.
- `assets/img/`: espacio para imágenes locales. La maqueta conserva sus imágenes de propiedades remotas.
- `assets/fonts/`: espacio para fuentes locales. Actualmente Outfit y Work Sans se cargan desde Google Fonts.
- `.vscode/extensions.json`: sugerencias de extensiones para VS Code.

## Abrir en local

1. Abre esta carpeta (`sandbox-vision-inmobiliaria`) en VS Code.
2. Instala la extensión **Live Server** si VS Code la recomienda.
3. Abre `index.html` y selecciona **Go Live** en la barra de estado.
4. Live Server abrirá la página en `http://127.0.0.1:5500` o en el siguiente puerto disponible.

También puedes abrir `index.html` directamente en un navegador, aunque Live Server es preferible para recarga automática.

## Pruebas

Usa las herramientas de desarrollador del navegador (`F12`) para inspeccionar la consola, los recursos y los tamaños de escritorio, tablet y móvil. Los formularios solo muestran una confirmación local: no envían datos ni se conectan a un backend.

Las imágenes de propiedades y las fuentes de Google requieren conexión a internet. Puedes reemplazar las imágenes remotas por archivos propios en `assets/img/` y actualizar sus rutas en `index.html`. Los formularios son demostrativos: no envían datos ni se conectan a un backend.
