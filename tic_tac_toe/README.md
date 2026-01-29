# Juego de Gato (Tic-Tac-Toe)

Proyecto convertido a sitio HTML estático:

- Una versión CLI (consola) del juego.
- Una versión web con Flask que permite jugar en el navegador y usar el botón "Imprimir" del navegador para obtener una copia en papel/PDF.
- Una versión totalmente estática en HTML/CSS/JS en `static_site`.

La carpeta `static_site` contiene `index.html`, `style.css` y `script.js`. Abre `static_site/index.html` en tu navegador para jugar o sirve la carpeta con cualquier servidor estático.

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

Instrucciones rápidas:

- Abrir localmente: haz doble clic en `tic_tac_toe/static_site/index.html` o abre en el navegador.
- Servir por HTTP: usa un servidor estático, por ejemplo con Python 3:

```powershell
cd "tic_tac_toe/static_site"
python -m http.server 8000
# luego abrir http://127.0.0.1:8000
```
