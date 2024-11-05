// run-eslint.js
import { ESLint } from "eslint";
import config from "./eslint.config.mjs";

const args = process.argv.slice(2);  // Skip the first two elements (node path and script path)

(async function main() {
    // Initialize ESLint with options
    const overrideConfig = { ...config[0] }
    delete overrideConfig.languageOptions;
    delete overrideConfig.files;
    delete overrideConfig.ignores;
    if (overrideConfig.plugins)
        overrideConfig.plugins = Object.keys(overrideConfig.plugins);

    overrideConfig.globals = {
        gsap: "readonly",
    };
    // Add parser options
    overrideConfig.parser = "@typescript-eslint/parser";
    overrideConfig.parserOptions = {
        ecmaVersion: 2021, // or another version depending on your project
        sourceType: "module",
        ecmaFeatures: {
            jsx: true, // if you are using JSX
        },
        project: "./tsconfig.json", // path to your tsconfig.json
    };
    const eslint = new ESLint({
        overrideConfig: overrideConfig,
        fix: args.includes('--fix')
    });

    // Lint files
    const results = await eslint.lintFiles(["src/**/*.{tsx,ts}"]); // specify your files or directories

    if (args.includes('--fix'))
        await ESLint.outputFixes(results);

    // Format the results
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    // Output the results to the console
    console.log(resultText);

    // Check for errors (non-zero exit code on lint errors)
    const hasErrors = results.some(result => result.errorCount > 0);
    process.exit(hasErrors ? 1 : 0);
})().catch(error => {
    process.exitCode = 1;
    console.error(error);
});