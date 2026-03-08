# OpenSlop

Coding agent in your terminal

## Installation

```bash
npm install -g @openslop/openslop
```

> The package publishes a CLI binary `openslop` that you can run from any directory.

## Quick Start

1. **Setup the agent**

   ```bash
   openslop setup
   ```

   This command sets up a configuration file (`.openslop/config.json`) in the home directory. You can edit this file using setup command.

2. **Run the agent**
   ```bash
   openslop
   ```
   You can then type natural‑language instructions and the agent will execute them, creating or editing files in your project.

## Configuration

The generated `.openslop/config.json` looks like this:

```json
{
	"apiKey": "string",
	"baseUrl": "string",
	"model": "string"
}
```

- **apiKey** – API key for authentication.
- **baseUrl** – Base URL of the provider e.g. google, openai, anthropic, etc.
- **model** – Underlying LLM model used for generation.

## Example Workflow

```bash
# Create a new project folder
mkdir my‑project && cd my‑project
# Start OpenSlop
openslop
# Ask OpenSlop to scaffold a basic Express server
```

## Troubleshooting

- **Command not found** – Ensure the global npm bin path is in your `PATH`. Run `npm root -g` to see where the binary is installed.
- **Permission errors** – On Unix systems you might need `sudo npm install -g openslop` if your global npm directory requires elevated privileges.

## Contributing

We welcome contributions! Fork the repository, make your changes, and open a pull request.

## License

MIT © OpenSlop Team
