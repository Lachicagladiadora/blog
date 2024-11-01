/* empty css                                 */
import { a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_D7lyRi_1.mjs';
import 'kleur/colors';
import { jsx } from 'react/jsx-runtime';
import 'react';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DMnD81T3.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

function SomeoneRead(props) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "1em",
      height: "1em",
      viewBox: "0 0 512 512",
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fill: "currentColor",
          d: "M204.055 213.905q-18.12-5.28-34.61-9a146 146 0 0 1-6.78-44.33c0-65.61 42.17-118.8 94.19-118.8s94.15 53.14 94.15 118.76a146.3 146.3 0 0 1-6.16 42.32q-20.52 4.3-43.72 11.05c-22 6.42-39.79 12.78-48.56 16.05c-8.72-3.27-26.51-9.63-48.51-16.05m-127.95 84.94a55.16 55.16 0 1 0 55.16 55.15a55.16 55.16 0 0 0-55.16-55.15m359.79 0a55.16 55.16 0 1 0 55.16 55.15a55.16 55.16 0 0 0-55.15-55.15zm-71.15 55.15a71.24 71.24 0 0 1 42.26-65v-77.55c-64.49 0-154.44 35.64-154.44 35.64s-89.95-35.64-154.44-35.64v74.92a71.14 71.14 0 0 1 0 135.28v7c64.49 0 154.44 41.58 154.44 41.58s89.99-41.55 154.44-41.55v-9.68a71.24 71.24 0 0 1-42.26-65"
        }
      )
    }
  );
}

const $$About = createComponent(($$result, $$props, $$slots) => {
  const pageTitle = "About";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex-1 flex flex-col items-center justify-center gap-4"> <div class="flex flex-col gap-4 items-center justify-center md:px-20 md:flex-row"> <div class="flex flex-col gap-5"> <p>This blog was created to share the little knowledge I have acquired studying, I hope it will be useful and help to clarify some topics of your interest.</p> <p class="text-obscure dark:text-blank-light flex gap-3 items-center justify-center">
Happy reading!
${renderComponent($$result2, "SomeoneRead", SomeoneRead, { "className": "h-8 w-8" })} </p> </div> </div> </div> ` })}`;
}, "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/about.astro", void 0);

const $$file = "/home/el_descendiente_del_mal/dev/me/lcg-knowbud/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
