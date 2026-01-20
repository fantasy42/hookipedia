import {defineConfig, globalIgnores} from 'eslint/config';
import pluginUnicorn from 'eslint-plugin-unicorn';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  pluginUnicorn.configs.recommended,

  {
    rules: {
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/filename-case': [
        'error',
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
          ignore: [
            'apple-icon.tsx',
            'icon.tsx',
            'mdx-components.tsx',
            'opengraph-image.*',
            'robots.ts',
            'sitemap.ts',
            'not-found.tsx',
          ],
        },
      ],
    },
  },

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.source/**',
  ]),
]);

export default eslintConfig;
