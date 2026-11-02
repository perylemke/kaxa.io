import fs from "node:fs";

const required = [
  "docs/.vitepress/dist/index.html",
  "docs/.vitepress/dist/CNAME",
];

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`missing ${file}`);
    process.exit(1);
  }
}
