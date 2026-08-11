import type { StarlightPlugin } from "@astrojs/starlight/types";

export type DraculaAccent =
  "purple" | "pink" | "red" | "orange" | "yellow" | "green" | "cyan";

export interface DraculaThemeOptions {
  /** Accent color used for links, buttons and highlights. Defaults to `"purple"`. */
  accent?: DraculaAccent;
}

export default function starlightThemeDracula(
  options: DraculaThemeOptions = {},
): StarlightPlugin {
  const { accent = "purple" } = options;
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
            `starlight-theme-dracula/styles/accents/${accent}.css`,
          ],
          // Code blocks stay Dracula in both color schemes, unless the
          // site brings its own Expressive Code setup.
          ...(config.expressiveCode === undefined && {
            expressiveCode: {
              themes: ["dracula"],
              styleOverrides: {
                borderColor: "var(--sl-color-gray-5)",
                codeBackground: "#21222c",
              },
            },
          }),
        });
      },
    },
  };
}
