# Sistema de Gestión de Turnos

Aplicación de escritorio para Windows (Electron) que facilita la programación semanal de empleados en una panadería u operación similar. Permite gestionar cargos y colores, arrastrar empleados a turnos, registrar novedades (descansos, vacaciones, incapacidad), exportar a Excel y realizar respaldos/restauraciones en JSON.

## Características
- Gestión de empleados: alta/edición/eliminación y multi‑cargo.
- Asignación por arrastrar y soltar a turnos de mañana/tarde con validaciones.
- Reglas por cargo: cargos críticos con requisitos mínimos por turno.
- Novedades: descanso remunerado/no remunerado, vacaciones, incapacidad; bloqueo inteligente.
- Exportación: Excel con programación, novedades y resumen.
- Respaldo/Restauración del estado en JSON.
- Configuración visual: colores por cargo con previsualización en tiempo real.
- Instalador one‑click y ejecutable portable (sin instalación).

## Requisitos
- Usuario final:
  - Windows 10/11 (64‑bit).
  - Sin necesidad de Node.js ni permisos de administrador.
- Desarrollo:
  - Node.js 18+ y npm.

## Descargas (carpeta `dist`)
- Instalador (NSIS one‑click): `dist/GestorTurnos-1.0.0-Setup.exe`
- Portable (sin instalación): `dist/GestorTurnos-1.0.0-Portable.exe`
- Alternativa comprimida: `dist/GestorTurnos-1.0.0-Portable.rar`

> Nota: En primera ejecución, Windows SmartScreen puede mostrar un aviso. Haz clic en "Más información" → "Ejecutar de todas formas" para continuar.

## Uso Rápido
1. Abre la aplicación (instalada o portable).
2. Empleados:
   - Botón "Nuevo" para registrar. Click derecho para editar/bloquear/eliminar.
3. Calendario:
   - Arrastra empleados a Mañana/Tarde. Se valida doble turno salvo excepciones.
4. Novedades:
   - Arrastra un empleado al panel correspondiente; define fechas y observaciones.
5. Configuración:
   - Cambia horarios AM/PM, ciclo de descansos, nombre de la empresa.
   - Gestiona cargos: nombre, color (previsualización inmediata), excepción (permite doble turno), requisitos mínimos AM/PM.
6. Exportar:
   - Excel: botón "Exportar".
   - Respaldo JSON: "Exportar JSON"; restaurar con "Importar JSON".

## Construcción (Desarrolladores)
Scripts disponibles (`package.json`):
- `npm start` → Ejecuta la app en modo desarrollo (Electron).
- `npm run icon` → Genera el ícono a partir de `TURNOS.png` usando `scripts/make-icon.js` y guarda en `build/icon.ico`.
- `npm run dist` → Empaqueta para Windows con instalador NSIS.
- `npm run dist:portable` → Empaqueta ejecutable portable para Windows.

Pasos típicos:
```bash
npm install
npm run icon
npm run dist          # instalador one-click
npm run dist:portable # ejecutable portable
```

### Configuración de build (resumen)
Se usa `electron-builder`. Bloques clave en `package.json`:
- `build.win.target`: `nsis` para instalador.
- `build.portable`: artefacto `GestorTurnos-${version}-Portable.exe`.
- `nsis`: instalador one‑click sin per‑machine (instala por usuario), crea acceso directo.
- `files`: incluye `index.html`, `instrucciones.txt`, `main.js`, `preload.js`, `build/icon.ico`.

### Icono
- Origen: `TURNOS.png` (raíz del proyecto).
- Generación: `npm run icon` ejecuta `scripts/make-icon.js` para crear `build/icon.ico`.

## Estructura del Proyecto
```
SISTEMA GESTOR DE TURNOS/
├── build/
│   └── icon.ico
├── html
├── index.html
├── instrucciones.txt
├── main.js
├── package-lock.json
├── package.json
├── preload.js
└── scripts/
    └── make-icon.js
```

## Notas de Diseño
- Los colores de cargo se aplican como fondo sólido en:
  - Lista de empleados.
  - Chips de asignaciones en calendario.
  - Leyenda de cargos.
- La previsualización de color en Configuración no guarda hasta confirmar; cancelar revierte.

## Problemas Comunes
- SmartScreen bloquea el .exe:
  - Usa "Más información" → "Ejecutar de todas formas".
- Falta de permisos:
  - El instalador es per‑usuario; no requiere admin. Si configuraste per‑machine, necesitarás permisos elevados.
- Ícono no se aplica:
  - Ejecuta `npm run icon` antes de empaquetar; confirma que `build/icon.ico` existe.

## Créditos y Licencia
- Autor: Panadería XYZ.
- Licencia: `UNLICENSED` (ver `package.json`).