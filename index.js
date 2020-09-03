const { app, BrowserWindow } = require("electron")

function createWindow() {
  const Window = new BrowserWindow({
    minWidth: 1100,
    minHeight: 750,
    height: 750,
    width: 1100,
    title: "Youtube Kids",
    show: false,
    autoHideMenuBar: true,
    center: true,
    backgroundColor: "#334",
    icon: "icon.png",
  })

  Window.loadURL("https://youtubekids.com/").catch(() => {
    Window.loadFile("connection-error.html")
  })

  Window.on("ready-to-show", () => {
    Window.show()
  })
}

app.whenReady().then(createWindow)

app.on("window-all-closed", () => {
 
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
