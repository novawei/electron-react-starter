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

  if (process.env.NODE_ENV === 'production') {
    win.loadURL(`file://${path.resolve(__dirname, 'dist', 'index.html')}`)
  } else {
    win.loadURL(`http://localhost:${process.env.PORT}`)
  }
  win.maximize()
  win.webContents.openDevTools()
  win.show()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  app.quit()
})