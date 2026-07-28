// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeDracula from "starlight-theme-dracula";

// https://astro.build/config
export default defineConfig({
  site: "https://wasi-master.github.io",
  base: "/dracula-for-starlight",
  integrations: [
    starlight({
      title: "Dracula for Starlight",
      logo: {
        src: "./src/assets/dracula.png",
        alt: "Dracula",
      },
      favicon: "/favicon.png",
      social: [
        {
          label: "GitHub",
          icon: "github",
          href: "https://github.com/wasi-master/dracula-for-starlight",
        },
        {
          label: "Discord",
          icon: "discord",
          href: "https://draculatheme.com/discord-invite",
        },
      ],
      sidebar: [
        {
          label: "Start Here",
          items: ["getting-started", "configuration", "customization"],
        },
        {
          label: "Reference",
          items: ["palette", "demo"],
        },
      ],
      plugins: [starlightThemeDracula()],
    }),
  ],
});
