# NextUI Light Theme

This repository defines a custom light theme for NextUI’s Storybook.

## How It Works

- **theme.json**: Defines the entire light theme configuration (colors, layout, etc.).
- **custom-tailwind.config.js**: Tailwind config that imports `theme.json` and sets a custom named theme.
- **GitHub Actions Workflow**:
  - Clones the [NextUI repo](https://github.com/nextui-org/nextui).
  - Copies `custom-tailwind.config.js` into NextUI’s Storybook directory.
  - Builds the Storybook.
  - Deploys it to GitHub Pages.

## Updating the Theme

1. Modify `theme.json`.
2. Commit and push.
3. The GitHub Action automatically rebuilds and redeploys.

## Viewing the Deployed Storybook

Once built, visit:  
[https://neohrio.github.io/nextui-theme/](https://neohrio.github.io/nextui-theme/)

Ensure GitHub Pages is enabled in repo settings.
