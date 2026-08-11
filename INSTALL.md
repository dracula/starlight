### [Astro Starlight](https://starlight.astro.build/)

#### Install using npm

```bash
npm install starlight-theme-dracula
```

Or use your package manager of choice:

```bash
pnpm add starlight-theme-dracula
```

```bash
yarn add starlight-theme-dracula
```

#### Activating theme

1. Open your `astro.config.mjs`;
2. Import the plugin and add it to Starlight's `plugins` array:

   ```js
   import { defineConfig } from "astro/config";
   import starlight from "@astrojs/starlight";
   import starlightThemeDracula from "starlight-theme-dracula";

   export default defineConfig({
     integrations: [
       starlight({
         title: "My Docs",
         plugins: [starlightThemeDracula()],
       }),
     ],
   });
   ```

3. Boom! It's working ✨

Dark mode now uses Dracula and light mode uses Alucard. To change the accent color and more, check out the [documentation](https://wasi-master.github.io/dracula-for-starlight/).
