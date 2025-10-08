# Code Formatting Guide

This project uses a unified code formatting configuration to ensure consistency across all team members.

## Tools Used

- **EditorConfig**: Basic editor settings (indentation, line endings, charset)
- **Prettier**: Opinionated code formatter
- **ESLint**: Linting and some auto-fixable code quality issues

## Setup for New Team Members

### 1. Install Required VS Code Extensions

When you open this project, VS Code will suggest installing the following extensions:

- **Prettier - Code formatter** (`esbenp.prettier-vscode`)
- **EditorConfig for VS Code** (`editorconfig.editorconfig`)
- **ESLint** (`dbaeumer.vscode-eslint`)

Click "Install All" when prompted, or install them manually.

### 2. Install Dependencies

After cloning the repository, run:

```bash
pnpm install
```

This will install Prettier and all required plugins.

### 3. Verify Setup

The workspace settings (`.vscode/settings.json`) are already configured to:

- ✅ Format files on save
- ✅ Use Prettier as the default formatter
- ✅ Auto-fix ESLint issues on save
- ✅ Enforce consistent line endings (LF)
- ✅ Insert final newline in files
- ✅ Trim trailing whitespace

## Formatting Configuration

### EditorConfig (`.editorconfig`)

Basic editor settings that work across all editors:

- **Charset**: UTF-8
- **Indentation**: 2 spaces
- **Line endings**: LF (Unix-style)
- **Insert final newline**: Yes
- **Trim trailing whitespace**: Yes (except in Markdown)

### Prettier (`.prettierrc`)

Code formatting rules:

- **Semicolons**: Yes
- **Quotes**: Double quotes
- **Trailing commas**: ES5 compatible
- **Tab width**: 2 spaces
- **Print width**: 80 characters
- **Arrow function parens**: Always
- **Tailwind CSS**: Class sorting enabled

## Manual Formatting

### Format All Files

```bash
pnpm format
```

### Check Formatting (CI/CD)

```bash
pnpm format:check
```

This command is useful in CI/CD pipelines to verify that all files are properly formatted.

## Common Issues

### Files Not Formatting on Save

1. Make sure the Prettier extension is installed
2. Check that Prettier is set as the default formatter in VS Code settings
3. Verify that `editor.formatOnSave` is enabled

### Different Formatting Between Developers

This usually happens when:

- EditorConfig extension is not installed
- Different Prettier versions are being used (solved by using workspace version)
- Git's `autocrlf` setting is causing line ending issues

**Solution**: Ensure all developers:

1. Install the recommended extensions
2. Use the workspace's Prettier version (not global)
3. Run `pnpm install` to get the same dependencies

### Line Ending Issues (Windows)

If you're on Windows and seeing line ending changes, configure Git:

```bash
git config --global core.autocrlf input
```

## Files Excluded from Formatting

The following files/directories are ignored (see `.prettierignore`):

- Build outputs (`dist`, `.next`, etc.)
- `node_modules`
- Lock files
- Environment files
- Generated files

## Enforcing Format in CI/CD

Add this to your CI pipeline to ensure all code is properly formatted:

```yaml
- name: Check code formatting
  run: pnpm format:check
```

## Questions?

If you encounter formatting issues or have questions about the configuration, please reach out to the team or create an issue.
