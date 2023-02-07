/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.a1308132.mjs';
import 'html-escaper';

const $$Astro$2 = createAstro();
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`<html lang="en">
	<head>
		<meta charset="utf-8">
		<link rel="icon" type="image/svg+xml" href="/favicon.svg">
		<meta name="viewport" content="width=device-width">
		<meta name="generator"${addAttribute(Astro2.generator, "content")}>
		<title>Astro</title>
	${renderHead($$result)}</head>
	<body>
		<h1>Astro</h1>
	</body></html>`;
}, "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/index.astro");

const $$file$2 = "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/index.astro";
const $$url$2 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate``;
}, "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/patients/index.astro");

const $$file$1 = "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/patients/index.astro";
const $$url$1 = "/patients";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  return renderTemplate``;
}, "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/patients/[id].patient.astro");

const $$file = "/Users/arthur/Documents/Projets Lezards/seikoya-astro/src/pages/patients/[id].patient.astro";
const $$url = "/patients/[id].patient";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$id,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b };
