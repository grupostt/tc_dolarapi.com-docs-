# Juego de Gato (Tic-Tac-Toe)

Proyecto simple en Python que incluye:

- Una versión CLI (consola) del juego.
- Una versión web con Flask que permite jugar en el navegador y usar el botón "Imprimir" del navegador para obtener una copia en papel/PDF.

Requisitos
- Python 3.8+
- Instalar dependencias:

```bash
pip install -r requirements.txt
```

Ejecutar la versión CLI:

```bash
python -m tic_tac_toe.cli
```

Ejecutar la versión web (Windows PowerShell):

```powershell
$env:FLASK_APP = 'tic_tac_toe.web:app'
flask run
# Abrir http://127.0.0.1:5000
```

La página web incluye un botón "Imprimir" que llama a la función de impresión del navegador.
