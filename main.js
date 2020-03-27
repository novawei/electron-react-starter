const { app, BrowserWindow } = require('electron')

let win = undefined

function createWindow() {
  win = new BrowserWindow({
    width: 1024,
    height: 728,
    show: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
  win.maximize()
  win.webContents.openDevTools()
  win.show()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})