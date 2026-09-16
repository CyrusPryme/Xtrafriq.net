import js from "@eslint/js"
import next from "@next/eslint-plugin-next"

export default [
  {
    ignores: [".next/**", "node_modules/**", "out/**", "dist/**", "scripts/**"],
  },
  js.configs.recommended,
  {
    plugins: {
      "@next/next": next,
    },
    rules: {
      ...(next.configs.recommended?.rules ?? {}),
      ...(next.configs["core-web-vitals"]?.rules ?? {}),
    },
  },
]

