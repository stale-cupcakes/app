// const { app, BrowserWindow } = require('electron') //import app and browserwindow
const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')
const createWindow = () => { //function to create the window
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    webPreferences: {
    preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html') //uses index html for the page
}

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

//Many of Electron's core modules are Node.js event emitters that adhere to Node's asynchronous event-driven architecture
//can use react

//1: new header
//2: background/start screen
//3: buttons for the start screen
//