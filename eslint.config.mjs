import * as wdio from 'eslint-plugin-wdio';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                browser: 'readonly',
                driver: 'readonly',
                $: 'readonly',
                $$: 'readonly',
                describe: 'readonly',
                it: 'readonly',
                before: 'readonly',
                after: 'readonly'
            }
        },
        plugins: {
            wdio
        },
        rules: {
            'wdio/no-pause': 'error',
            'wdio/await-expect': 'error'
        }
    }
];