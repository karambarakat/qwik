// uno.config.ts
import {
  defineConfig,
  presetMini,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    banner: `
      mx-auto px-40px py-30px
     `,
    button: `
      bg-dirty-black text-white hover:bg-dark-blue cursor-pointer
        p-10px min-w-50px
        text-center font-700 text-2rem  
        border-none rounded-8px
      `,
  },
  theme: {
    colors: {
      ["dark-blue"]: "#006ce9",
      ["light-blue"]: "#18b6f6",
      ["light-purple"]: "#ac7ff4",
      ["dark-purple"]: "#713fc2",
      ["dirty-black"]: "#1d2033",
      ["text-color"]: "#ffffff",
      ["main-background"]: "#1c224a",
      ["header-background"]: "#1c224a",
      ["footer-background"]: "#0d0c25",
    },
    breakpoints: {
      xs: "450px",
      sm: "768px",
      md: "1024px",
    },
  },
  presets: [
    presetMini({
      dark: "media",
      variablePrefix: "v-",
    }),
  ],
  transformers: [
    transformerCompileClass(),
    transformerDirectives(),
    transformerVariantGroup(),
  ],
});
