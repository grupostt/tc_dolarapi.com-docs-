# Tic-Tac-Toe Project - AI Coding Agent Instructions

## Project Overview
This is a Spanish-language Tic-Tac-Toe game with three implementations:
- **Static HTML/CSS/JS** (`static_site/`): Pure frontend, playable by opening `index.html` in a browser
- **Flask Web Version**: Python backend for serving the game
- **CLI Version**: Command-line interface using Python

## Architecture & Key Components

### Frontend (`static_site/`)
- **index.html**: Game board with 9 cells (3x3 grid), status display, and control buttons
- **script.js**: Core game logic with vanilla JavaScript (no frameworks)
  - `board`: Array of 9 cells tracking X/O moves
  - `checkWinner()`: Evaluates winning conditions (rows, columns, diagonals)
  - Event listeners for cell clicks and reset button
- **style.css**: Grid-based styling for the board
- **hollidays.js**: External API integration (OpenHolidaysAPI) - currently unused but configured for Costa Rica holidays

### Game Logic Pattern
The game uses:
- **Board State**: Simple array `[0-9]` where empty cells are `''`, occupied cells contain `'X'` or `'O'`
- **Winner Detection**: Checks 8 lines (3 rows, 3 cols, 2 diagonals)
- **Turn Management**: Alternates between X and O players
- **UI Updates**: Direct DOM manipulation via `textContent` and dataset attributes

## Development Conventions

### Naming & Styling
- Spanish language for UI text and comments (per README and existing code)
- Camel case for JavaScript functions: `checkWinner()`, `updateStatus()`
- HTML data attributes for element targeting: `data-pos="0"` through `data-pos="8"`
- CSS classes use kebab-case: `.cell`, `.controls`

### API Integration Pattern
When adding external APIs (like `hollidays.js`):
- Use async/await fetch pattern
- Wrap in try-catch for error handling
- Return empty array `[]` on failure (graceful degradation)
- Parameter format: `?countryIsoCode=CR&validFrom=YYYY-01-01&validTo=YYYY-12-31&languageIsoCode=es`

## Common Tasks

### Running the Project
```powershell
# Static version: open static_site/index.html directly or serve via Python
cd static_site
python -m http.server 8000

# Flask version
$env:FLASK_APP = 'tic_tac_toe.web:app'
flask run

# CLI version
python -m tic_tac_toe.cli
```

### Modifying Game Rules
Edit `checkWinner()` in `script.js` to change winning conditions. Currently checks:
- Horizontal wins: `[0,1,2]`, `[3,4,5]`, `[6,7,8]`
- Vertical wins: `[0,3,6]`, `[1,4,7]`, `[2,5,8]`
- Diagonal wins: `[0,4,8]`, `[2,4,6]`

### Extending Features
- Use vanilla JavaScript (no dependencies in static version)
- Maintain Spanish text for consistency
- Update both HTML structure and event listeners when adding UI elements
- Test by opening `index.html` in browser dev tools

## File Organization
- `static_site/`: Self-contained static version
- Root: Python package structure (Flask app, CLI module)
- No build step required for static version (pure HTML/CSS/JS)
