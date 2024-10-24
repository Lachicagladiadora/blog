/* empty css                                 */
import { c as createComponent, r as renderTemplate, e as renderComponent, b as createAstro, m as maybeRenderHead, a as addAttribute } from '../chunks/astro/server_CA3yrJsu.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_Duzgy3--.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('../chunks/post-1_DY8rF1do.mjs').then(n => n._),"../posts/post-10.md": () => import('../chunks/post-10_VKhO3VYy.mjs').then(n => n._),"../posts/post-3.md": () => import('../chunks/post-3_BHo6nho-.mjs').then(n => n._),"../posts/post-4.md": () => import('../chunks/post-4_CcvyO5yq.mjs').then(n => n._),"../posts/post-5.md": () => import('../chunks/post-5_BpldCZnG.mjs').then(n => n._),"../posts/post-6.md": () => import('../chunks/post-6_JRalnbGP.mjs').then(n => n._)}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((c) => c.frontmatter.tags).flat())];
  const pageTitle = "Tags";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-6 items-center justify-center"> <h2 class="text-3xl text-center py-8 text-first dark:text-second">Tags</h2> <p>Selec a tag for show relation posts</p> ${tags.map((c) => renderTemplate`<a${addAttribute(`/tags/${c}/`, "href")} class="bg-violet-900 border-2 text-first-dark border-first-dark  dark:text-second dark:border-second px-2 py-1 rounded-md hover:text-second-light hover:bg-first-dark dark:hover:text-first-dark dark:hover:bg-second">${c}</a>`)} </div> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/blog/src/pages/tags/index.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/blog/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
