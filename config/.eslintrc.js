module.exports = {

	"parser": require.resolve('babel-eslint'),

	"parserOptions": {
		"ecmaVersion": 7,
		"sourceType": "module",
		"ecmaFeatures": {
			"modules": true,
			"impliedStrict": true,
			"experimentalObjectRestSpread": true,
			"experimentalDecorators": true,
			"jsx": true
		}
	},

	"extends": "eslint:recommended",

	"env": {
		"node": true,
		"browser": true,
		"jest": true,
		"es6": true
	},

	"plugins": [
		"react"
	],

	"globals": {
		"window": "writable",
		"fetch": "readonly"
	},

	"rules": {
		"semi": "error",
		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["off", "always"],
		"arrow-spacing": "error",
		"brace-style": ["error", "stroustrup", {
			"allowSingleLine": true
		}],
		"camelcase": ["warn", {
			"properties": "never"
		}],
		"comma-dangle": ["error", "never"],
		"comma-style": ["error", "last"],
		"constructor-super": "error",
		"curly": ["off", "multi-line"],
		"dot-notation": ["error", {
			"allowPattern": "^[a-z]+(_[a-z]+)+$"
		}],
		"eqeqeq": "off",
		"func-style": ["error", "declaration", {
			"allowArrowFunctions": true
		}],
		"guard-for-in": "off",
		"handle-callback-err": "off",
		"indent": ["error", "tab", {
			"SwitchCase": 1
		}],
		"jsx-quotes": ["error", "prefer-double"],
		"key-spacing": "error",
		"keyword-spacing": "error",
		"lines-around-comment": "warn",
		"new-cap": "warn",
		"new-parens": "error",
		"no-alert": "warn",
		"no-array-constructor": "error",
		"no-caller": "error",
		"no-cond-assign": "warn",
		"no-console": ["warn", {
			"allow": ["warn", "error"]
		}],
		"no-const-assign": "error",
		"no-delete-var": "error",
		"no-dupe-class-members": "error",
		"no-dupe-keys": "error",
		"no-duplicate-imports": "error",
		"no-else-return": "error",
		"no-empty-pattern": "off",
		"no-empty": "off",
		"no-extra-parens": "off",
		"no-iterator": "error",
		"no-lonely-if": "error",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"no-multi-str": "error",
		"no-multiple-empty-lines": ["error", {
			"max": 2
		}],
		"no-new-wrappers": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-shadow-restricted-names": "error",
		"no-shadow": "off",
		"no-spaced-func": "error",
		"no-this-before-super": "error",
		"no-trailing-spaces": ["error", {
			"skipBlankLines": true
		}],
		"no-undef-init": "error",
		"no-unneeded-ternary": "error",
		"no-unused-vars": ["error", {
			"args": "none",
			"varsIgnorePattern": "^(_.*)$"
		}],
		"no-useless-call": "error",
		"no-useless-computed-key": "error",
		"no-useless-concat": "error",
		"no-useless-constructor": "error",
		"no-useless-escape": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"no-with": "error",
		"object-curly-spacing": ["error", "always"],
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"prefer-rest-params": "warn",
		"prefer-spread": "warn",
		"prefer-template": "off",
		"quote-props": ["error", "as-needed"],
		"quotes": ["error", "double", {
			"avoidEscape": true,
			"allowTemplateLiterals": true
		}],
		"radix": "error",
		"rest-spread-spacing": "error",
		"space-before-function-paren": ["off", "always"],
		"space-in-parens": ["off", "never"],
		"strict": ["error", "never"],
		"unicode-bom": "error",
		"valid-jsdoc": ["off", {
			"requireReturn": false
		}],
		"react/jsx-boolean-value": [2, "never"],
		"react/jsx-closing-bracket-location": 2,
		"react/jsx-curly-spacing": 2,
		"react/display-name": [1, {
			"ignoreTranspilerName": false
		}],
		"react/jsx-equals-spacing": 2,
		"react/jsx-indent-props": [2, "tab"],
		"react/jsx-max-props-per-line": [2, {
			"maximum": 6
		}],
		"react/jsx-no-bind": [1, {
			"ignoreRefs": true
		}],
		"react/jsx-no-comment-textnodes": 2,
		"react/jsx-no-duplicate-props": 2,
		"react/jsx-no-target-blank": 2,
		"react/jsx-no-undef": 2,
		"react/jsx-pascal-case": 2,
		"react/jsx-tag-spacing": [2, {
			"beforeSelfClosing": "always"
		}],
		"react/jsx-uses-react": 2,
		"react/jsx-uses-vars": 2,
		"react/jsx-wrap-multilines": 2,
		"react/no-danger": 2,
		"react/no-did-mount-set-state": 2,
		"react/no-did-update-set-state": 2,
		"react/no-find-dom-node": 2,
		"react/no-is-mounted": 2,
		"react/no-string-refs": 0,
		"react/prefer-es6-class": 2,
		"react/prefer-stateless-function": 1,
		"react/require-render-return": 2,
		"react/self-closing-comp": 2,
		"react/sort-comp": [1, {
			"order": [
				"properties",
				"static-methods",
				"everything-else",
				"lifecycle",
				"rendering"
			],
			"groups": {
				"properties": [
					"state"
				],
				"rendering": [
					"/^render.+$/",
					"render"
				]
			}

		}],
		"no-unused-vars": [2, {
			"args": "none",
			"varsIgnorePattern": "^(h|_.*)$"
		}]
	}

};