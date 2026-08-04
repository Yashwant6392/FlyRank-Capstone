# FlyRank-Capstone

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Commit Convention: Conventional](https://img.shields.io/badge/Conventional%20Commits-1.0.0-blue.svg)](https://www.conventionalcommits.org/)
[![AI-Assisted](https://img.shields.io/badge/AI%20Assisted-Antigravity-purple.svg)](CLAUDE.md)

> **FlyRank AI Internship Capstone Project**  
> A professional open-source Node.js foundational repository built with modern engineering standards, clean architecture, and AI-assisted workflows.

---

## Project Description

FlyRank-Capstone serves as the foundational milestone project for the **FlyRank AI Internship Phase 1**. It demonstrates industry-standard open-source development practices, rigorous project setup, clean project architecture, structured guidelines for AI collaboration, and conventional git workflows.

---

## Objectives

- **Node.js Setup**: Establish a clean Node.js workspace configured with modern standards and proper project metadata.
- **Repository Architecture**: Maintain a clean, intuitive project structure ready for scalable development.
- **AI Collaboration Standards**: Integrate comprehensive guidelines (`CLAUDE.md`) for seamless AI-human pair programming.
- **Version Control Excellence**: Practice strict adherence to Conventional Commits for transparent version history.
- **Open-Source Readiness**: Include essential open-source elements such as standard licensing, environment rules, and full setup guides.

---

## Tech Stack

- **Runtime**: Node.js (v20+ LTS)
- **Language**: JavaScript (ES6+ CommonJS)
- **Package Manager**: npm
- **Version Control**: Git
- **Specification / Guidelines**: Conventional Commits & Open-Source Best Practices

---

## Folder Structure

```text
FlyRank-Capstone/
├── .gitignore          # Git exclusion rules
├── CLAUDE.md           # Developer guidelines and AI collaboration rules
├── LICENSE             # MIT License file
├── README.md           # Project documentation
├── index.js            # Main execution script
└── package.json        # Node.js project configuration and scripts
```

---

## Installation

### Prerequisites

Ensure you have **Node.js** (v18.x or later) and **npm** installed on your system.

```bash
node -v
npm -v
```

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/FlyRank-Capstone.git
   cd FlyRank-Capstone
   ```

2. **Verify Node dependencies**:
   ```bash
   npm install
   ```

---

## Usage & Verification

To run the main application script:

```bash
npm start
```

Or execute directly with Node.js:

```bash
node index.js
```

### Verification
When executed, the system outputs the setup confirmation message:
```text
FlyRank AI Capstone setup completed successfully!
```

---

## Git Workflow

This project enforces **Conventional Commits** to keep the git history clean and meaningful.

### Commit Types
- `feat`: Standard feature addition
- `docs`: Documentation updates
- `fix`: Bug fixes
- `refactor`: Code refactoring without functionality changes
- `chore`: Maintenance tasks

### Example Commands
```bash
git add .
git commit -m "feat: initialize FlyRank capstone repository"
```

---

## AI Assistant Used

- **AI Assistant**: Antigravity AI (Google DeepMind)
- **Role**: AI Coding Assistant & Architectural Reviewer
- **Contributions**: Automated project setup, standard guideline documentation (`CLAUDE.md`), README design, AI code review, and automated README enhancement.

---

## Future Improvements

- Integrate automated unit testing using standard frameworks (e.g., Jest / Vitest).
- Add CI/CD workflows using GitHub Actions for automated linting and validation.
- Implement environment variable management with `.env` validation.
- Expand application functionality into core FlyRank domain services.

---

## Author

**FlyRank AI Intern**  
- Email: intern@flyrank.ai  
- GitHub: [@FlyRank](https://github.com/flyrank)

---

## License

This project is open-source and available under the [MIT License](LICENSE).
