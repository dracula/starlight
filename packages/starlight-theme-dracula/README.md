# starlight-theme-dracula

> A dark theme for [Astro Starlight](https://starlight.astro.build/).

Dark mode uses the classic [Dracula](https://draculatheme.com/) palette,
light mode uses Alucard (the official light counterpart), and code blocks
come pre-configured with the Dracula syntax theme.

![Screenshot of the Dracula variant](https://raw.githubusercontent.com/wasi-master/dracula-for-starlight/main/screenshot/01-dracula.png)

## Usage

```bash
npm install starlight-theme-dracula
```

```js
// astro.config.mjs
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

Links and highlights default to purple; pass
`starlightThemeDracula({ accent: "pink" })` (or any other palette color)
to change that.

Full documentation lives at
[wasi-master.github.io/dracula-for-starlight](https://wasi-master.github.io/dracula-for-starlight/).

## License

[MIT](https://github.com/wasi-master/dracula-for-starlight/blob/main/LICENSE)
