const esbuild = require('esbuild');

esbuild.build({
    entryPoints: ['src/index.ts'],
    outfile: 'dist/index.mjs',
    bundle: false,
    format: 'esm',
    target: 'node20',
    platform: 'node',
    sourcemap: false,
    minify: false,
    packages: 'external',
    // external: ['node_modules'],
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
    },
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.js': 'js',
        '.jsx': 'jsx',
    },
});