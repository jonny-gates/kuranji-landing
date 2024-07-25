# Using Tailwind with this project

Read this article for setup steps: https://mgav.medium.com/setup-tailwindcss-cli-for-html-25dbc375230

For developing run:
`npx tailwindcss -i ./css/input.css -o ./css/output.css --watch`

For production run (run this before the build):
`npx tailwindcss -o css/output.css --minify`

# For deployment

Run `npm run build`. This will update the `dist` folder. Commit this folder as it will get picked up and deployed by GitHub Actions.
