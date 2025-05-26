const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
let win;
const createWindow = () => { 
  win = new BrowserWindow({
    width: 300,
    height: 400,
    frame: false,
    webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
    contextIsolation: true, 
    nodeIntegration: false 
    }
  })

  win.loadFile('index.html') 
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
let windowMaximized = false;
ipcMain.on("manualClose", ()=>{
  app.quit();
});
ipcMain.on("manualMinimize", ()=>{
  win.minimize();
});
ipcMain.on("manualMaximize", ()=>{
  if (windowMaximized){
    win.unmaximize();
   }else{
      win.maximize();
    }
  windowMaximized=!windowMaximized;
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

