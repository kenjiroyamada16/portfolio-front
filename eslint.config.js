import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginYaml from "eslint-plugin-yaml";
import pluginImport from "eslint-plugin-import";
import stylistic from "@stylistic/eslint-plugin";
import pluginVuetify from "eslint-plugin-vuetify";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

// @ts-check
export default tseslint.config(
  eslint.configs.recommended,
  eslintPluginPrettierRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  ...pluginVue.configs["flat/strongly-recommended"],
  ...pluginVue.configs["flat/recommended"],
  {
    ignores: [
      ".vscode/",
      ".yarn/",
      "dist/",
      "public/",
      "*.d.ts",
      "src/**/*.d.ts",
      "src/**/*.generated.*",
      "eslint.config.js",
      "tsconfig.node.json",
      "tsconfig.json",
      "vite.config.ts",
    ],
  },
  {
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        project: [
          "tsconfig.json",
          "tsconfig.node.json",
        ],
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions: [".vue"],
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    settings: {
      "import/parsers": {
        espree: [".js", ".cjs", ".mjs", ".jsx"],
        "@typescript-eslint/parser": [".ts"],
        "vue-eslint-parser": [".vue"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
        alias: {
          map: [
            ["@", "./src"],
            ["~", "./node_modules"],
          ],
          extensions: [".js", ".ts", ".vue"],
        },
      },
      vite: {
        configPath: "./vite.config.ts",
      },
    },
    plugins: {
      import: pluginImport,
      vuetify: pluginVuetify,
      yaml: pluginYaml,
      "@stylistic": stylistic,
    },
    rules: {
      "@stylistic/semi": ["error", "always"],
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/type-annotation-spacing": "error",
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
      "vue/multi-word-component-names": "off",
      "vue/script-indent": [
        "error",
        2,
        {
          baseIndent: 1,
          switchCase: 1,
          ignores: [],
        },
      ],
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-extra-boolean-cast": "warn",
      "comma-dangle": ["error", "always-multiline"],
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "vue/no-setup-props-destructure": "off",
      "vue/no-multi-spaces": ["error", {
        "ignoreProperties": false
      }],
      "vue/html-indent": ["error", 2, {
        "attribute": 1,
        "baseIndent": 1,
        "closeBracket": 0,
        "alignAttributesVertically": true,
        "ignores": []
      }],
      "vue/html-closing-bracket-newline": [
        "error",
        {
          "singleline": "never",
          "multiline": "always",
          "selfClosingTag": {
            "singleline": "never",
            "multiline": "always"
          }
        }
      ],
      "vue/first-attribute-linebreak": [
        "error",
        {
          "singleline": "ignore",
          "multiline": "below"
        }
      ],
      "no-unused-vars": "off", // this leads to unused vars warnings on type declarations
      // const lines: string[] = []; style
      "@typescript-eslint/array-type": [
        "error",
        {
          default: "array",
        },
      ],
      // Enable @ts-ignore etc.
      "@typescript-eslint/ban-ts-comment": "off",
      // Left-hand side style
      "@typescript-eslint/consistent-generic-constructors": [
        "error",
        "type-annotation",
      ],
      // Fix for pinia
      "@typescript-eslint/explicit-function-return-type": "off",
      // Allow short land for pretter
      "@typescript-eslint/no-confusing-void-expression": [
        "error",
        {
          ignoreArrowShorthand: true,
        },
      ],
      // Fix for vite import.meta.env
      "@typescript-eslint/strict-boolean-expressions": "off",
      // Fix for vite env.d.ts.
      "@typescript-eslint/triple-slash-reference": "off",
      // Fix for Vue setup style
      "import/default": "off",
      // Fix for Vue setup style
      "import/no-default-export": "off",
      // A tag with no content should be written like <br />.
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
          },
        },
      ],
    },
  },
  eslintConfigPrettier,
);
