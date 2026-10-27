export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      sourceType: "module",
      parser: @typescript-eslint/parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: true
      }
    }
  }
]