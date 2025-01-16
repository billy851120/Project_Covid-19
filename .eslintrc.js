module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-essential'],
	parserOptions: {
		parser: '@babel/eslint-parser',
		ecmaVersion: 12,
		sourceType: 'module',
		allowImportExportEverywhere: true, // 不限制eslint對 import使用位置
		ecmaFeatures: {
			modules: true,
			legacyDecorators: true,
		},
	},

	plugins: ['vue'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'linebreak-style': ['off', 'windows'],
		'no-constant-condition': ['off', { checkLoops: false }], // 關閉警告，條件判斷不能直接使用true、false
		'no-unused-vars': 'off',
		indent: ['error', 'tab'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
	},
};
