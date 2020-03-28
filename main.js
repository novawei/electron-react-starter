const path = require('path')
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

  if (process.env.NODE_ENV === 'development') {
    win.loadURL(`http://localhost:${process.env.PORT}`)
  } else {
    win.loadURL(`file://${path.join(__dirname, 'dist', 'index.html')}`)
  }
  win.maximize()
  win.webContents.openDevTools()
  win.show()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})