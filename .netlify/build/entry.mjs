import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_BUe9y2su.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/posts/post-1.astro.mjs');
const _page5 = () => import('./pages/posts/post-10.astro.mjs');
const _page6 = () => import('./pages/posts/post-3.astro.mjs');
const _page7 = () => import('./pages/posts/post-4.astro.mjs');
const _page8 = () => import('./pages/posts/post-5.astro.mjs');
const _page9 = () => import('./pages/posts/post-6.astro.mjs');
const _page10 = () => import('./pages/tags/_tag_.astro.mjs');
const _page11 = () => import('./pages/tags.astro.mjs');
const _page12 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/posts/post-1.md", _page4],
    ["src/pages/posts/post-10.md", _page5],
    ["src/pages/posts/post-3.md", _page6],
    ["src/pages/posts/post-4.md", _page7],
    ["src/pages/posts/post-5.md", _page8],
    ["src/pages/posts/post-6.md", _page9],
    ["src/pages/tags/[tag].astro", _page10],
    ["src/pages/tags/index.astro", _page11],
    ["src/pages/index.astro", _page12]
]);
const serverIslandMap = new Map();
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "d2d1dd74-7900-4f14-9676-aa7ad6da495b"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
