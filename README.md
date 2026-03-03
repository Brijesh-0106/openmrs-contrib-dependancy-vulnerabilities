# 🛡️ OpenMRS Dependency Vulnerability Dashboard

A beginner-friendly, interactive dashboard for visualizing and analyzing security vulnerabilities across OpenMRS modules. This tool helps developers and maintainers identify, track, and prioritize dependency risks.

## 🤔 What is this project?

If you're new here — welcome! This dashboard reads JSON security reports for OpenMRS repositories and displays them in a clean, visual format. Instead of reading raw JSON files, you get:

> **Don't worry if you're new to React or TypeScript** — this guide will walk you through every step!

## ✅ Prerequisites

Before you begin, make sure you have the following installed on your computer:

### 1. Node.js

Node.js lets you run JavaScript outside a browser (required to run this project).

- Download from: https://nodejs.org/
- Choose the **LTS (Long-Term Support)** version — it's the most stable
- To verify installation, open your terminal and run:

```bash
node --version
# Should output something like: v20.x.x

npm --version
# Should output something like: 10.x.x
```

### 2. Git

Git is used to download (clone) the project.

- Download from: https://git-scm.com/
- Verify with:

```bash
git --version
```

### 3. A Code Editor (recommended)

- [VS Code](https://code.visualstudio.com/) — free, beginner-friendly

---

## 🚀 Installation

Follow these steps one by one. Open your **terminal** (on Mac/Linux) or **Command Prompt / Git Bash** (on Windows).

### Step 1 — Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/openmrs-contrib-dependency-vulnerabilities.git
```

> 💡 Replace `YOUR-USERNAME` with your GitHub username if you forked it.

### Step 2 — Navigate into the project folder

```bash
cd openmrs-contrib-dependency-vulnerabilities
```

### Step 3 — Install dependencies

This downloads all the packages the project needs:

```bash
npm install
```

> ⏳ This might take a minute. You'll see a `node_modules/` folder appear when it's done.

### Step 4 — Start the development server

```bash
npm run dev
```

Then open your browser and go to:

```
http://localhost:5173
```

You should see the dashboard! 🎉

### Step 5 — Build for production (optional)

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized version of the app in a `dist/` folder.

---

## 🎨 SCSS / Sass Setup

This project uses **SCSS** (Sassy CSS) for styling — it's like regular CSS but with superpowers (variables, nesting, mixins, etc.).

### What is SCSS?

SCSS is a **CSS preprocessor** — you write `.scss` files and they get compiled into regular `.css` that the browser understands.

Example:

```scss
/* SCSS */
$primary-color: #c00;

.severity-tag {
  color: $primary-color;

  &.critical {
    background: darken($primary-color, 10%);
  }
}
```

### Installing Sass

Sass is already included via Vite (the build tool this project uses). But if you need to install it manually:

```bash
npm install --save-dev sass
```

Verify it's installed:

```bash
npx sass --version
```

### File Naming Convention

| File Type               | Description                                      |
| ----------------------- | ------------------------------------------------ |
| `styles.scss`           | Main styles file                                 |
| `_variables.scss`       | Color, font, spacing variables (prefix with `_`) |
| `_mixins.scss`          | Reusable style snippets                          |
| `Component.module.scss` | Scoped styles for a specific component           |

> 💡 Files starting with `_` are called **partials** — they won't be compiled on their own, but are imported into other files.

### Importing SCSS Partials

```scss
/* In your main styles.scss */
@use "./variables" as *;
@use "./mixins" as *;
```

### Compiling SCSS Manually (if needed)

Watch for changes and auto-compile:

```bash
npx sass --watch src/styles/main.scss src/styles/main.css
```

Compile once:

```bash
npx sass src/styles/main.scss src/styles/main.css
```

### SCSS with Vite (already configured ✅)

Since this project uses Vite, you can simply import `.scss` files directly in your components:

```tsx
// In a React component
import "./Component.scss";
```

Vite handles the compilation automatically — no extra config needed!

---

## 📁 Project Structure

Here's what each folder and file does:

```
openmrs-dashboard-frontend/
│
├── src/
│   ├── components/                  # Reusable UI building blocks
│   │   ├── CveTable.tsx             # Table showing CVE vulnerability details
│   │   ├── RepositorySection.tsx    # Cards for each repo with expandable tables
│   │   └── SeverityPill.tsx         # Colored pill/badge showing severity level
│   │
│   ├── data/                        # Raw JSON vulnerability reports
│   │   ├── openmrs-core.json
│   │   ├── openmrs-module-billing.json
│   │   └── openmrs-module-idgen.json
│   │
│   ├── helpers/                     # Utility/helper functions
│   │   ├── servity.ts               # Severity normalization logic
│   │   ├── sorting.ts               # Sorting utilities for tables
│   │   └── transform.ts             # Converts raw JSON into UI-friendly format
│   │
│   ├── App.tsx                      # Root component — ties everything together
│   ├── index.scss                   # Global SCSS entry point (imported in main.tsx)
│   ├── main.tsx                     # App entry point — renders App into the DOM
│   ├── output.css                   # Auto-generated compiled CSS (do not edit manually)
│   ├── output.css.map               # Source map for debugging CSS ↔ SCSS
│   ├── style.scss                   # Additional global styles written in SCSS
│   └── types.ts                     # Shared TypeScript interfaces and types
│
├── .gitignore                       # Files Git should ignore
├── package.json                     # Project metadata and npm scripts
├── tsconfig.json                    # TypeScript configuration
└── vite.config.ts                   # Vite build tool configuration
```

> 🎨 **First time using SCSS?** So was I when building this! SCSS is just CSS with extra features like variables and nesting. The `index.scss` and `style.scss` files are where all the styles live — Vite compiles them automatically into `output.css` so the browser can understand them. You don't need to touch `output.css` directly.

---

## ➕ Adding New Repositories

Want to add vulnerability data for a new OpenMRS module? Follow these steps:

### Step 1 — Add the JSON file

Place your vulnerability report in the `src/data/` folder:

```
src/data/openmrs-module-mymodule.json
```

### Step 2 — Register it in the transformer

Open `src/utils/transform.ts` and add your file to the `allReports` array:

```ts
import myModuleReport from "../data/openmrs-module-mymodule.json";

const allReports = [
  coreReport,
  billingReport,
  idgenReport,
  myModuleReport, // 👈 Add this line
];
```

### Step 3 — Restart the dev server

```bash
npm run dev
```

Your new module should now appear on the dashboard!

---

## 📦 Data Sources

Vulnerability data is stored as JSON files in `src/data/`:

| File                          | Module         |
| ----------------------------- | -------------- |
| `openmrs-core.json`           | OpenMRS Core   |
| `openmrs-module-billing.json` | Billing Module |
| `openmrs-module-idgen.json`   | IDGen Module   |

## 📜 License

This project is licensed under the **MIT License** — you're free to use, modify, and distribute it.

---

## 🙋 Need Help?

- Visit the [OpenMRS Talk Community](https://talk.openmrs.org/)

---

> Made with ❤️ for the OpenMRS community
