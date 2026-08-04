# FlyRank-Capstone - Development & AI Guidelines

Welcome to the **FlyRank-Capstone** development guidelines. This document details architectural patterns, coding standards, workflow rules, and AI interaction guidelines for contributors and AI assistants working on this repository.

---

## 1. Project Stack

- **Runtime**: Node.js (v20+ LTS recommended)
- **Language**: JavaScript (ES6+ / CommonJS / Modular JS)
- **Package Manager**: npm
- **Version Control**: Git
- **License**: MIT

---

## 2. Project Structure

```text
FlyRank-Capstone/
├── .gitignore          # Excluded paths and system metadata
├── CLAUDE.md           # AI and developer documentation / coding standards
├── LICENSE             # MIT License terms
├── README.md           # Main project overview and usage documentation
├── index.js            # Main entry point script
└── package.json        # Project manifest and scripts
```

---

## 3. Coding Standards

- **Modern JavaScript**: Use ES6+ syntax (const/let, arrow functions, template literals, destructuring, async/await).
- **Single Responsibility**: Maintain clean function boundaries with focused logic.
- **Strict Error Handling**: Gracefully catch and log runtime errors using clear messages.
- **Modularity**: Structure logic cleanly to facilitate maintainability and future extensibility.

---

## 4. Naming Conventions

- **Files & Directories**: `kebab-case.js` for module files, lower-case single words for core scripts (`index.js`).
- **Variables & Functions**: `camelCase` (e.g., `calculateRank`, `isSetupComplete`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_ATTEMPTS`).
- **Classes**: `PascalCase` (e.g., `RankCalculator`).

---

## 5. Formatting Rules

- **Indentation**: 2 spaces (no tabs).
- **Semicolons**: Always use semicolons.
- **Quotes**: Double quotes `""` for strings unless backticks are required for interpolation.
- **Line Length**: Limit lines to a maximum of 100 characters for optimal readability.

---

## 6. Git Workflow & Commit Convention

### Branch Strategy
- `main`: Production-ready code.
- `feature/<name>`: New feature branches.
- `fix/<name>`: Bug fix branches.
- `docs/<name>`: Documentation updates.

### Conventional Commits
All commit messages MUST adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` A new feature.
- `fix:` A bug fix.
- `docs:` Documentation only changes.
- `style:` Changes that do not affect the meaning of the code (white-space, formatting, etc.).
- `refactor:` A code change that neither fixes a bug nor adds a feature.
- `test:` Adding missing tests or correcting existing tests.
- `chore:` Changes to the build process or auxiliary tools and libraries.

*Example:* `feat: initialize FlyRank capstone repository`

---

## 7. AI Usage Guidelines

When assisting or generating code for this repository:
1. **Context Awareness**: Read `CLAUDE.md` and `README.md` before making modifications.
2. **Deterministic Output**: Avoid placeholders or unverified dummy functions in production logic.
3. **Automated Verification**: Always verify edits by running relevant scripts (e.g., `npm start` or `node index.js`).
4. **Self-Review**: Perform proactive AI code and documentation reviews before finalizing commits.

---

## 8. Best Practices & Development Rules

- Do not commit secrets, API keys, or `.env` files.
- Keep dependencies lean and minimal.
- Ensure all created files contain clear inline docstrings where applicable.
- Test terminal commands before documenting them.
