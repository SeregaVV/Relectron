const {app, BrowserWindow} = require('electron');
const path = require('path')
const url = require('url')

let mainWindow;

app.on('ready',()=>{
  mainWindow = new BrowserWindow({width: 1600, height: 1000})
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol:'file',
    slashes:true
  }));

  mainWindow.webContents.openDevTools();
  mainWindow.on('closed',()=>{
      mainWindow = null;
  })
});
