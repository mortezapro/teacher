const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "public");
const outputDir = path.join(root, ".vercel", "output");
const staticDir = path.join(outputDir, "static");

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(staticDir, { recursive: true });
fs.cpSync(publicDir, staticDir, { recursive: true });

fs.writeFileSync(
  path.join(outputDir, "config.json"),
  JSON.stringify({ version: 3 }, null, 2)
);

console.log("خروجی استاتیک Vercel ساخته شد.");
