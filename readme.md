# Using Tailwind with this project

Read this article for setup steps: https://mgav.medium.com/setup-tailwindcss-cli-for-html-25dbc375230

For developing run:
`npx tailwindcss -i ./css/input.css -o ./css/output.css --watch`

# For deployment

Run `npm run build`. This will update the `dist` folder. Commit this folder as it will get picked up and deployed by GitHub Actions.

Then minify the tailwindcss file with:
`npx tailwindcss -o dist/css/output.css --minify`

```
rm -rf dist
npm run build
npx tailwindcss -o dist/css/output.css --minify
git add .
git commit -m "Build site"
```
