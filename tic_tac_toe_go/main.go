package main

import (
    "embed"
    "fmt"
    "log"
    "net/http"
    "os/exec"
    "runtime"
)

//go:embed templates/* static/*
var assets embed.FS

func openBrowser(url string) {
    var cmd *exec.Cmd
    switch runtime.GOOS {
    case "windows":
        cmd = exec.Command("rundll32", "url.dll,FileProtocolHandler", url)
    default:
        cmd = exec.Command("xdg-open", url)
    }
    _ = cmd.Start()
}

func main() {
    fsTemplates := http.FS(assets)
    http.Handle("/", http.FileServer(fsTemplates))
    http.HandleFunc("/index.html", func(w http.ResponseWriter, r *http.Request) {
        f, _ := assets.Open("templates/index.html")
        defer f.Close()
        http.ServeContent(w, r, "index.html", /*modtime*/ 0, f)
    })
    http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.FS(assets))))

    addr := ":8080"
    url := "http://127.0.0.1:8080/index.html"
    fmt.Println("Iniciando servidor en", addr)
    go openBrowser(url)
    log.Fatal(http.ListenAndServe(addr, nil))
}
