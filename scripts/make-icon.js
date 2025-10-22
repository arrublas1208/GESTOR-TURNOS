const fs = require('fs');
const path = require('path');
const pngToIco = require('png-to-ico');

(async () => {
  const src = path.join(__dirname, '..', 'TURNOS.png');
  const destDir = path.join(__dirname, '..', 'build');
  const dest = path.join(destDir, 'icon.ico');
  try {
    if (!fs.existsSync(src)) {
      console.error('No se encontró TURNOS.png en la carpeta del proyecto.');
      process.exit(1);
    }
    if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
    const buf = await pngToIco(src);
    fs.writeFileSync(dest, buf);
    console.log('Icono generado en', dest);
  } catch (err) {
    console.error('Error generando icono ICO a partir de TURNOS.png:', err);
    process.exit(1);
  }
})();