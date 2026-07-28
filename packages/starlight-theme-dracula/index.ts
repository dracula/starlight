import type { StarlightPlugin } from "@astrojs/starlight/types";

export default function starlightThemeDracula(): StarlightPlugin {
  return {
    name: "starlight-theme-dracula",
    hooks: {
      "config:setup"({ config, updateConfig }) {
        updateConfig({
          customCss: [
            ...(config.customCss ?? []),
            "starlight-theme-dracula/styles/shared.css",
            "starlight-theme-dracula/styles/dracula.css",
            "starlight-theme-dracula/styles/alucard.css",
          ],
        });
      },
    },
  };
}
