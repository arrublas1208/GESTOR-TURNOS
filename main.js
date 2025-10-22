const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

function createMainWindow(){
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#f4f4f4',
    icon: path.join(__dirname, 'build', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createMainWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});