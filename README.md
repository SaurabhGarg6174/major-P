# SmartHome Solutions

A home-automation marketing site with a smart appliance metering dashboard, built as a college major project.

## Features

- 🏠 Marketing landing page for a home-automation company — product showcase (Smart Lighting, Security Systems, Climate Control), services, portfolio, and contact sections
- 🔑 Login / Sign Up popup forms
- ⚡ **Appliance Metering Dashboard** — add/remove appliances and track per-device stats in a live table:
  - Device name & operational status
  - Power consumption (W), voltage, current
  - Energy usage
  - Connection type (Wi-Fi / Ethernet / Bluetooth)
- 📱 Responsive layout with mobile menu

## Tech Stack

HTML, CSS, vanilla JavaScript (DOM manipulation, form handling, dynamic table rendering)

## Project Structure

```
frontend/
  ├── index.html          # Landing page
  ├── metering.html        # Appliance metering dashboard
  ├── login.js             # Login popup logic
  ├── script.js             # General site interactivity
  ├── meteringScript.js     # Appliance table logic (add/remove/track)
  ├── styles.css / meteringStyle.css / animations.css
  └── Images/
```

## Getting Started

Static frontend, no build step required.

```bash
git clone https://github.com/SaurabhGarg6174/major-P.git
cd major-P/frontend
```

Open `index.html` in a browser, or serve with any static server (e.g. `npx serve .`).

## Notes

Frontend-only demo — appliance data is stored in-memory (JS array), not persisted to a backend/database.
