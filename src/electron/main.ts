import { app, BrowserWindow } from 'electron';
import path from 'path';
import {isDev} from "./utils.js";

app.on('ready', () : void => {
    const mainWindow : BrowserWindow = new BrowserWindow({});
    if (isDev()){
        mainWindow.loadURL('http://localhost:8080');
    } else
    {
        mainWindow.loadFile(path.join(app.getAppPath(), 'dist-react/index.html'));
    }
})