/* eslint-disable @typescript-eslint/no-var-requires */
const prettierConfig = require("./.prettierrc");
const packageJSON = require("./package.json");

module.exports = {
  root: true,

  env: {
    browser: true,
    es6: true,
    node: true,
    "cypress/globals": true,
  },

  extends: [
    "eslint:recommended",

    "airbnb",

    "plugin:@typescript-eslint/recommended",

    "plugin:css-modules/recommended",

    "plugin:react-hooks/recommended",
  ],

  plugins: [
    "@typescript-eslint",

    "css-modules",

    "prettier",

    "react",

    "react-hooks",

    "simple-import-sort",

    "unused-imports",

    "cypress",
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2020,
    sourceType: "module",
  },

  rules: {
    // ==> ESLint

    // Enforce separated lines for Git

    "array-bracket-newline": ["error", "consistent"],

    "array-element-newline": ["error", "consistent"],

    // Allows "_foo" - classes' private vars
    "no-underscore-dangle": "off",

    quotes: ["error", "double"],

    // Max-len follows Prettier config
    "max-len": [
      "warn",
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        code: prettierConfig.printWidth,
        tabWidth: prettierConfig.tabWidth,
        ignoreTrailingComments: false,
      },
    ],

    "object-curly-newline": [
      "error",
      {
        ObjectExpression: {
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          consistent: true,
        },
      },
    ],

    "object-property-newline": [
      "error",
      {
        allowAllPropertiesOnSameLine: false,
        allowMultiplePropertiesPerLine: false,
      },
    ],

    "no-multiple-empty-lines": [
      "error",
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],

    // fix conflict with prettier
    "operator-linebreak": ["off"],

    "padded-blocks": [
      "error",
      {
        // blocks: "never", Allows both "if" blocks and function blocks padding
        classes: "always",
        switches: "always",
      },
      {
        allowSingleLineBlocks: true,
      },
    ],

    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "class",
        next: "*",
      },
    ],

    // Unnecessary, we always use 10
    radix: "off",

    // Conflicts with "import/order"
    // => Use "eslint-plugin-simple-import-sort"
    "sort-imports": "off",

    // ==> eslint-plugin-import

    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],

    // Always add 2 lines after every import block
    "import/newline-after-import": ["error", { count: 1 }],

    "import/no-cycle": "error",

    // Conflicts with "sort-imports"
    // => Use "eslint-plugin-simple-import-sort"
    "import/order": "off",

    "import/prefer-default-export": "off",

    // ==> eslint-plugin-react

    // Disable "JSX not allowed in files with extension '.tsx'" warnings
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    ],

    "react/prop-types": 0,

    // Prevents rendering errors due to missing keys
    "react/jsx-key": [
      "error",
      {
        checkFragmentShorthand: true,
      },
    ],

    "react/require-default-props": "off", // use typescript so don't need

    "react/static-property-placement": "off",

    "react-hooks/exhaustive-deps": "error",

    // ==> @typescript-eslint

    "@typescript-eslint/ban-ts-comment": "warn",

    // Overrides 'indent', follow AirBnB's
    "@typescript-eslint/indent": [
      "error",
      prettierConfig.tabWidth,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          "JSXElement",
          "JSXElement > *",
          "JSXAttribute",
          "JSXIdentifier",
          "JSXNamespacedName",
          "JSXMemberExpression",
          "JSXSpreadAttribute",
          "JSXExpressionContainer",
          "JSXOpeningElement",
          "JSXClosingElement",
          "JSXText",
          "JSXEmptyExpression",
          "JSXSpreadChild",
        ],
        ignoreComments: false,
      },
    ],

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "no-use-before-define": "off", // Why? https://stackoverflow.com/a/64024916
    "@typescript-eslint/no-use-before-define": [
      "error",
      {
        // Allow functions to be defined before they are used; because function is hoisted, so this is safe
        functions: false,
        typedefs: false, // Allow typedefs to be defined before they are used
        variables: false, // false check when upper scope only, because variables are hoisted
      },
    ],

    // Use correct typings or unknown
    "@typescript-eslint/no-explicit-any": "error",

    // ==> prettier
    // 'prettier/prettier': 'warn',
    // WHY DON'T? See "extends" and "plugins".

    // ==> simple-import-sort
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",

    // ==> unused-imports

    // Turned on: auto-fix
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-imports-ts": "warn",

    // Turned off: no auto-fix and duplicate @typescript-eslint/no-unused-vars
    "unused-imports/no-unused-vars": "off",
    "unused-imports/no-unused-vars-ts": "off",

    // ==> next

    //  As discussed with team, some time <img /> give a better performance.
    "@next/next/no-img-element": "off",
  },

  settings: {
    // ==> eslint-plugin-import
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["src", "node_modules"],
      },
    },

    // ==> eslint-plugin-react
    react: {
      // Detect React version only if it is installed
      // @ts-ignore - "packageJSON.dependencies" may not have "react"
      version: typeof packageJSON.dependencies !== "undefined" && packageJSON.dependencies.react ? "detect" : "latest",
    },
  },
};
