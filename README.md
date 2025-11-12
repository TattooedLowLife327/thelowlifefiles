# The LowLife Files (Interactive)

Mobile-first, black-and-white interactive dossier with a hero banner and slide-in sidebar.

## Local Dev
```bash
npm i
npm run dev
```

Note for VS Code users: if your editor shows "Cannot find module './pages/..." even though the files exist, make sure VS Code uses the workspace TypeScript version. Create or open `.vscode/settings.json` and add:

```json
{
	"typescript.tsdk": "node_modules/typescript/lib"
}
```
Then run the command "TypeScript: Restart TS Server" or reload the window.
