import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import babel from 'rollup-plugin-babel';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from "rollup-plugin-typescript2"; // For Typescript

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
            {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
            }
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            external({
                includeDependencies: true
            }),
            resolve(),
            terser(),
            typescript({ useTsconfigDeclarationDir: true }),
            postcss({
                extract: true, // Extract CSS to a separate file
                modules: true, // Enable CSS modules (optional)
                // ... other PostCSS options
            }),
        ]
    }
];
