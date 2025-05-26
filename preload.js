const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron,
  ping: () => ipcRenderer.invoke('ping'),
});

contextBridge.exposeInMainWorld('windowControls', {
  close: () => ipcRenderer.send("manualClose"),
  minimize: () => ipcRenderer.send("manualMinimize"),
  maximize: () => ipcRenderer.send("manualMaximize")
});
