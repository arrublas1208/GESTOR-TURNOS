const { contextBridge } = require('electron');

// Entorno seguro sin APIs de licencia ni IPC
contextBridge.exposeInMainWorld('api', {
  // Aquí puedes exponer APIs futuras si se necesitan
});