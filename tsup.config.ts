import { defineConfig } from 'tsup';

export default defineConfig({
    entry               : ['src/main.ts'],
    format              : ['cjs', 'esm'],
    dts                 : true,
    splitting           : false,
    sourcemap           : true,
    clean               : true,
    minify              : true,
    treeshake           : true,
    external            : [
        // Bun runtime
        'bun',

        // Node.js built-ins (critical!)
        'child_process',
        'stream',
        'fs',
        'path',
        'readline',
        'async_hooks',
        'util',
        'process',
        'os',
        'events',
        'buffer',
        'crypto',
        'http',
        'https',
        'net',
        'tls',
        'url',
        'zlib',

        // Dependencies
        '@minejs/cli',
        '@inquirer/prompts'
    ],
    target              : 'node23',
    outDir              : 'dist',
    platform            : 'node',
    banner              : {
        js              : '#!/usr/bin/env bun'
    },
});