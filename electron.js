
const path = require('path')
const { menubar } = require('menubar');
const { globalShortcut, nativeTheme } = require('electron')

nativeTheme.on("updated", () => 
{
  const isDark = nativeTheme.shouldUseDarkColors || false
  const trayIcon = path.resolve(`${__dirname}/img/icons/icon${isDark ? "_dark" : ""}.png`)

  mb.tray.setImage(trayIcon)
});

const isDark = nativeTheme.shouldUseDarkColors || false

const mb = menubar(
{
  dir: `${__dirname}/public`,
  preloadWindow: true,
  icon: `${__dirname}/img/icons/icon${isDark ? "_dark" : ""}.png`,
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
