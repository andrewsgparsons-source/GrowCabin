# Project Board Template

A lightweight, self-contained project dashboard. Static HTML/JS/CSS — no build step, no dependencies. Designed to be hosted on GitHub Pages and managed by an AI agent + human.

## Features

- **📋 Kanban Board** — Ideas → Backlog → In Progress → Done. Drag-and-drop. Mobile-friendly tabs.
- **🗺️ Decision Map** — Visual node-based decision tracker with options, connections, and status.
- **🧠 Brain** — D3.js knowledge graph showing relationships between concepts.
- **⚠️ Rules** — Non-negotiable hard rules for the project.
- **📥📤 Import/Export** — JSON-based. Agent edits `data/cards.json` directly and pushes.

## Quick Start

### 1. Create a new repo from this template

```bash
# Copy this folder into a new repo
cp -r project-board-template my-project-board
cd my-project-board
git init
git add .
git commit -m "Initial project board"
```

### 2. Customise

Edit these files to make it yours:

| File | What to change |
|------|---------------|
| `index.html` | Project name in `<h1>` and `<title>` |
| `manifest.json` | App name, description |
| `data/cards.json` | Your categories and initial cards |
| `data/decisions.json` | Your decisions (or leave empty) |
| `data/rules.json` | Your rules and rule categories |
| `data/brain.json` | Your knowledge graph nodes (or leave empty) |
| `app.js` | Category definitions in `CATEGORIES` object |
| `icon.svg` | Your project icon |

### 3. Deploy to GitHub Pages

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

Then enable GitHub Pages in repo Settings → Pages → Source: main branch.

### 4. Agent Integration

Your AI agent manages the board by editing `data/cards.json` directly:

```bash
# Agent workflow:
vim data/cards.json        # Edit cards
git add data/cards.json
git commit -m "Kanban: [description]"
git push
```

#### Card format:
```json
{
  "id": "1",
  "title": "Task title",
  "description": "What needs doing",
  "status": "backlog",
  "priority": "medium",
  "category": "development",
  "createdAt": "2026-01-01T00:00:00Z",
  "completedAt": null
}
```

#### Statuses: `ideas` | `backlog` | `in-progress` | `done`
#### Priorities: `high` | `medium` | `low`
#### Categories: Define your own in `data/cards.json` and `app.js`

## File Structure

```
project-board-template/
├── index.html          # Kanban board (main page)
├── decisions.html      # Decision map
├── decisions.css       # Decision map styles
├── decisions.js        # Decision map logic
├── brain-2d.html       # Knowledge graph
├── rules.html          # Hard rules page
├── app.js              # Kanban board logic
├── styles.css          # Shared styles
├── icon.svg            # Project icon
├── manifest.json       # PWA manifest
├── data/
│   ├── cards.json      # Kanban cards + categories
│   ├── decisions.json  # Decision nodes
│   ├── rules.json      # Hard rules
│   └── brain.json      # Knowledge graph data
└── README.md           # This file
```

## Notes

- All data is in `data/*.json` — no database needed
- LocalStorage used for draft edits; repo JSON is source of truth
- Mobile-responsive (tab navigation on small screens)
- Dark theme by default
- No external dependencies except D3.js (loaded via CDN for the brain graph)
