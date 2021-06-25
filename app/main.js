// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron');
const path = require('path');



function createWindow () {
  const display = screen.getPrimaryDisplay();
  const width = display.bounds.width;
  const height = display.bounds.height;

  
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 100,
    height: 40,
    x: width - 100,
    y: (height / 2) - 20,
    alwaysOnTop : true,
    opacity: .9,
    icon: path.join(__dirname, '../build/icon.ico'),    
    webPreferences: {
      preload: path.join(__dirname, '../preload.js'),
      nodeIntegration: true,
      contextIsolation: false
    },
    frame: false,
  })

  mainWindow.loadFile('public/index.html')

}


app.setLoginItemSettings({
  openAtLogin: true,
  path: app.getPath("exe")
});

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {    
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
