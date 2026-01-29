# Tic-Tac-Toe — Windows standalone executable (Go)

Este directorio contiene una app en Go que sirve la misma interfaz web del juego y abre el navegador automáticamente. Compila a un `.exe` nativo de Windows que no requiere instalación adicional en la máquina objetivo.

Requisitos para compilar (en tu máquina de desarrollo):
- Go 1.16+

Compilar:

```powershell
cd "C:\Users\Pablo Betrano\Documents\Curso IA\Nueva carpeta GitHub Copilot\tic_tac_toe_go"
go build -o tic_tac_toe.exe
```

Ejecutar el `.exe` resultante:

```powershell
.\tic_tac_toe.exe
# Abre el navegador en http://localhost:8080
```

Si quieres que intente compilar el `.exe` aquí, dímelo y lo intentaré (necesitaré que el entorno tenga Go instalado).
