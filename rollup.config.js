import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
    
const pkg = require('./package.json');

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
        input: !production ? 'src/main.js' : 'src/index.js',
        output: !production
        ? {
            sourcemap: true,
            format: 'iife',
            name: 'app',
            file: 'public/bundle.js',
          }: [
            {
               file: pkg.main,
               format: 'cjs',
               exports: 'default'
            },
            {
              file: pkg.module,
              format: 'es',
              exports: 'default'
            },
          ],
        plugins: [
            svelte(),
            resolve({
              browser: true,
              dedupe: ['svelte']
            }),
            commonjs(),
            !production && serve(),

            // Watch the `public` directory and refresh the
            // browser on changes when not in production
            !production && livereload('public'),

            // If we're building for production (npm run build
            // instead of npm run dev), minify
            production && terser()
        ]
};