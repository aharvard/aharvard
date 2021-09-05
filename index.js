#!/usr/bin/env node
const pkgJSON = require("./package.json");
const welcome = require("cli-welcome");

const newDate = new Date();
const yearsWorked = newDate.getFullYear() - 2011;

welcome({
  title: pkgJSON.name,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  description: pkgJSON.description,
  version: pkgJSON.version,
  clear: true,
});

console.log(`Andrew Harvard

Lead UX Engineer with ${yearsWorked} years of UI design and development experience, last six years remote. Effective team leader as individual contributor, experienced with defining new working models and optimizing existing processes. Uses code to scale design across organizations with design systems and front-end prototyping. Expertise in crafting inclusive and resilient UIs with semantic HTML and modern CSS. Sharp eye for typography, spacing, and color. 

💻 Website: https://andrewharvard.com/
🐦 Twitter: https://twitter.com/aharvard

`);
