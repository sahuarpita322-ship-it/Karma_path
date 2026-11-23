const { app, BrowserWindow, shell, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');
const http = require('http');

let mainWindow = null;
let staticServer = null;
let serverPort = 0;

// Embedded zero-dependency local static server for offline SPA routing
function startLocalServer(distPath) {
  return new Promise((resolve) => {
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.json': 'application/json',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.jpeg': 'image/jpeg',
      '.svg': 'image/svg+xml',
      '.webp': 'image/webp',
      '.webmanifest': 'application/manifest+json',
      '.ico': 'image/x-icon'
    };

    staticServer = http.createServer((req, res) => {
      let cleanUrl = req.url.split('?')[0];
      let filePath = path.join(distPath, cleanUrl === '/' ? 'index.html' : cleanUrl);

      // SPA rewrite: if file does not exist or has no extension, serve index.html
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(distPath, 'index.html');
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('File Not Found');
          return;
        }
        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*'
        });
        res.end(data);
      });
    });

    // Listen on available loopback port
    staticServer.listen(0, '127.0.0.1', () => {
      serverPort = staticServer.address().port;
      console.log(`[Karma-Path Desktop] Local offline server running at http://127.0.0.1:${serverPort}`);
      resolve(serverPort);
    });
  });
}

async function createWindow() {
  const isDev = process.argv.includes('--dev');
  const distPath = path.join(__dirname, '..', 'dist');

  // Ensure dist exists if running production
  if (!isDev && !fs.existsSync(distPath)) {
    console.log('[Karma-Path Desktop] dist/ directory not found. Please build the application first: npm run build');
  }

  mainWindow = new BrowserWindow({
    width: 1366,
    height: 860,
    minWidth: 960,
    minHeight: 620,
    title: 'Karma-Path | Discover Odisha - Desktop App',
    icon: path.join(__dirname, '..', 'public', 'icon.svg.jpeg'),
    backgroundColor: '#180B2B',
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webSecurity: true
    }
  });

  // Smooth appearance when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  // Open external links in user's default browser instead of electron window
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('http:') || url.startsWith('https:')) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });

  if (isDev) {
    mainWindow.loadURL('http://localhost:5173');
  } else {
    const port = await startLocalServer(distPath);
    mainWindow.loadURL(`http://127.0.0.1:${port}`);
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
    if (staticServer) {
      staticServer.close();
      staticServer = null;
    }
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (staticServer) {
      staticServer.close();
      staticServer = null;
    }
    app.quit();
  }
});
