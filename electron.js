
const path = require('path')
const { menubar } = require('menubar');
const { globalShortcut, nativeTheme } = require('electron')

nativeTheme.on("updated", () => 
{
  const isDark = nativeTheme.shouldUseDarkColors || false
  const trayIcon = path.resolve(`./build/icon${isDark ? "_dark" : ""}.png`)

  mb.tray.setImage(trayIcon)
});

const isDark = nativeTheme.shouldUseDarkColors || false

const mb = menubar(
{
  dir: './public',
  preloadWindow: true,
  icon: `./build/icon${isDark ? "_dark" : ""}.png`,
  browserWindow: 
  {
    minWidth: 360,
    width: 360,
    webPreferences: 
    {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  }
})

mb.on('ready', () => 
{
  globalShortcut.register('Alt+s', () => 
  {
    mb.window.show()
  })
})

/*
// Modules to control application life and create native browser window
const {app, BrowserWindow, screen} = require('electron')
const path = require('path')
const { floor } = Math;

const createWindow = () =>
{
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  const windowMinWidth = floor(width * 0.3);
  const windowStartWidth = floor(width * 0.7);

  const windowMinHeight = floor(height * 0.3);
  const windowStartHeight = floor(height * 0.7);

  // Create the browser window.
  const mainWindow = new BrowserWindow({
    minWidth: windowMinWidth,
    width: windowStartWidth,
    minHeight: windowMinHeight,
    height: windowStartHeight,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // and load the index.html of the app.
  mainWindow.loadFile('public/index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
*/