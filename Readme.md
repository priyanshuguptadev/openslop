# Openslop Monorepo

Welcome to **Openslop** – a modern TypeScript monorepo powered by **Turbo** and **Bun**. The repository is organized using bun workspaces and contains a set of packages and applications.

## 📂 Repository Structure

```
.
├─ apps/
│   ├─ tui/             # TUI application
│   ├─ landing/         # Landing page
│   └─ docs/            # Documentation
├─ packages/
│   ├─ agent/           # Core agent logic
│   ├─ config/          # Package for handling configuration of the agent
│   └─ typescript-config/ # Base TS config shared across the repo
├─ turbo.json           # Turborepo pipeline definition
├─ package.json         # Root package (dev dependencies, workspaces)
└─ Readme.md            # This file
```

### Packages

- **`@openslop/agent`** – The main library that powers the Openslop AI‑assistant.
- **`@openslop/config`** – Package for handling configuration of the agent.
- **`@openslop/typescript-config`** – Base `tsconfig.json` that all packages extend.

### Apps

- **`apps/tui`** – A command‑line interface for the Openslop AI‑assistant.
- **`apps/landing`** – A Next.js landing page for the Openslop AI‑assistant.
- **`apps/docs`** – A Docusaurus documentation site for the Openslop AI‑assistant.

## 🚀 Getting Started

1. **Install dependencies**

   ```bash
   bun install   # or `npm install` / `yarn`
   ```

2. **Build all packages**

   ```bash
   bun run build   # runs `turbo run build`
   ```

3. **Run TUI, Landing Page, Docs**

   ```bash 
   bun run dev
   ```

## 📦 Publishing

Packages are versioned independently using conventional commits. When ready, run:

```bash
npm publish
```

This will publish all changed packages to the npm registry.

## 🤝 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) (to be added) for guidelines on how to submit bugs, feature requests, or pull requests.

## 📄 License

This project is licensed under the **MIT License** – see the `LICENSE` file for details.
