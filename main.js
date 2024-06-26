// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu, MenuItem } = require('electron')
const path = require('node:path')

const createWindow = (filePath) => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        fullscreenable: true,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            devTools: true
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile(filePath)

    // Open the DevTools.
    // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow('src/features/home/index.html')

    app.on('activate', () => {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

const menuItems = [
    {
        label: 'Home',
        click: (menuItem, window) => window.loadFile('src/features/home/index.html')
    },
    {
        label: 'Settings',
        click: (menuItem, window) => window.loadFile('src/features/settings/settings.html')
    },
    {
        label: 'Aim Trainer',
        click: (menuItem, window) => window.loadFile('src/features/aimtrainer/aimtrainer.html')
    },
    {
        label: 'Others',
        submenu: [
            {
                label: 'Reload',
                accelerator: process.platform === 'darwin' ? 'Cmd+R' : 'Ctrl+R',
                click: (menuItem, window) => window.reload()
            },
            {
                label: 'Toggle DevTools',
                accelerator: process.platform === 'darwin' ? 'Cmd+Shift+C' : 'Ctrl+Shift+C',
                click: (menuItem, window) => window.webContents.toggleDevTools()
            }
        ]
    }
]

const menu = Menu.buildFromTemplate(menuItems)


Menu.setApplicationMenu(menu)