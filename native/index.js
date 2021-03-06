const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const url = require('url');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });
  mainWindow.loadURL(url.format({
    pathname: `${__dirname}/../public/index.html`,
    protocol: 'file:',
    slashes: true,
  }));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});


app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
