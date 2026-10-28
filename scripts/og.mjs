import { mkdirSync } from "node:fs";
import sharp from "sharp";

const W = 1200;
const H = 630;
const FONT = "Segoe UI, Inter, Helvetica, Arial, sans-serif";
const MONO = "Consolas, Menlo, monospace";
const INK = "#16151a";
const MUTED = "#4a4650";
const SUBTLE = "#6e6877";
const ACCENT = "#a03a16";
const CANVAS = "#fbfaf8";
const LINE = "#dedad2";

const PROJECTS = [
  {
    slug: "tms",
    name: "Transport Management System",
    tagline: "Quoting, booking and dispatching freight, plus the company's own vans",
    cover: "public/screenshots/fleet-live.webp",
  },
  {
    slug: "operations-portal",
    name: "Operations Portal and AI Assistant",
    tagline: "One door to every system: sign-in, permissions, analytics and an AI assistant",
    cover: "public/screenshots/g-ai-01.webp",
  },
  {
    slug: "partner-api",
    name: "Carrier Integration API",
    tagline: "Turns the company's own vans into a carrier other freight systems can book",
    cover: "public/screenshots/g-api-01.webp",
  },
  {
    slug: "warehouse",
    name: "Warehouse Operations Platform",
    tagline: "The software the warehouse floor runs on",
    cover: "public/screenshots/g-wh-01.webp",
  },
  {
    slug: "driver-app",
    name: "Driver App",
    tagline: "Driver app for route navigation, offline proof of delivery and live tracking",
    cover: "public/screenshots/g-driver-00.webp",
    fit: "contain",
  },
];

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function wrap(text, max) {
  const lines = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (next.length > max && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

const tspans = (lines, x, y, lineHeight) =>
  lines.map((l, i) => `<tspan x="${x}" y="${y + i * lineHeight}">${esc(l)}</tspan>`).join("");

async function windowFrame(cover, width, height, fit) {
  const img =
    fit === "contain"
      ? await sharp(cover)
          .resize({ width, height, fit: "contain", background: CANVAS })
          .png()
          .toBuffer()
      : await sharp(cover)
          .resize({ width: Math.round(width * 1.25) })
          .extract({ left: 0, top: 0, width, height })
          .png()
          .toBuffer();
  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="14" ry="14"/></svg>`,
  );
  return sharp(img)
    .composite([{ input: mask, blend: "dest-in" }])
    .png()
    .toBuffer();
}

async function project(p) {
  const nameLines = wrap(p.name, 20);
  const nameSize = nameLines.length > 2 ? 44 : 50;
  const tagLines = wrap(p.tagline, 42);
  const nameY = 200;
  const tagY = nameY + nameLines.length * (nameSize * 1.12) + 18;

  const text = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="${CANVAS}"/>
  <text x="72" y="118" font-family="${MONO}" font-size="17" letter-spacing="2" fill="${ACCENT}">IN PRODUCTION · JOAOSILVA.APP</text>
  <text font-family="${FONT}" font-size="${nameSize}" font-weight="700" fill="${INK}">${tspans(nameLines, 72, nameY, nameSize * 1.12)}</text>
  <text font-family="${FONT}" font-size="24" fill="${MUTED}">${tspans(tagLines, 72, tagY + 24, 33)}</text>
  <rect x="72" y="${H - 118}" width="56" height="4" fill="${ACCENT}"/>
  <text x="72" y="${H - 76}" font-family="${FONT}" font-size="22" font-weight="600" fill="${INK}">João Marcos Bueno da Silva</text>
  <text x="72" y="${H - 46}" font-family="${FONT}" font-size="19" fill="${SUBTLE}">Software Developer · Python, APIs &amp; AI Automation</text>
</svg>`;

  const frameW = 620;
  const frameH = 470;
  const frame = await windowFrame(p.cover, frameW, frameH, p.fit);
  const shadow = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${frameW + 60}" height="${frameH + 60}">
      <defs><filter id="b" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="14"/></filter></defs>
      <rect x="30" y="38" width="${frameW}" height="${frameH}" rx="14" fill="#16151a" opacity="0.22" filter="url(#b)"/>
      <rect x="29" y="29" width="${frameW + 2}" height="${frameH + 2}" rx="15" fill="${LINE}"/>
    </svg>`,
  );
  const x = 640;
  const y = 110;
  await sharp(Buffer.from(text))
    .composite([
      { input: shadow, left: x - 30, top: y - 30 },
      { input: frame, left: x, top: y },
    ])
    .png({ compressionLevel: 9 })
    .toFile(`public/og/${p.slug}.png`);
  console.log("og", p.slug);
}

async function home() {
  const art = await sharp("public/art/bay.webp")
    .resize({ width: W, height: H, fit: "cover", position: "right bottom" })
    .modulate({ brightness: 1.05, saturation: 0.9 })
    .png()
    .toBuffer();
  const veil = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="${CANVAS}" stop-opacity="1"/>
      <stop offset="0.55" stop-color="${CANVAS}" stop-opacity="0.96"/>
      <stop offset="1" stop-color="${CANVAS}" stop-opacity="0.35"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <text x="72" y="108" font-family="${MONO}" font-size="17" letter-spacing="2" fill="${ACCENT}">SOFTWARE DEVELOPER · GOLD COAST, AUSTRALIA</text>
  <text font-family="${FONT}" font-size="58" font-weight="700" fill="${INK}">${tspans(["João Marcos", "Bueno da Silva"], 72, 190, 66)}</text>
  <text font-family="${FONT}" font-size="25" fill="${MUTED}">${tspans(wrap("Python, APIs and AI automation. I build and maintain production software that connects business operations, enterprise systems and data: REST APIs, cloud infrastructure, warehouse automation and AI-powered tools.", 58), 72, 320, 35)}</text>
  <g font-family="${FONT}">
    <text x="72" y="500" font-size="44" font-weight="700" fill="${ACCENT}">5</text>
    <text x="72" y="532" font-size="19" fill="${MUTED}">systems in production</text>
    <text x="330" y="500" font-size="44" font-weight="700" fill="${ACCENT}">9</text>
    <text x="330" y="532" font-size="19" fill="${MUTED}">external systems integrated</text>
    <text x="640" y="500" font-size="44" font-weight="700" fill="${ACCENT}">10k+</text>
    <text x="640" y="532" font-size="19" fill="${MUTED}">consignments booked</text>
  </g>
  <text x="72" y="590" font-family="${FONT}" font-size="20" fill="${SUBTLE}">joaosilva.app</text>
</svg>`;
  await sharp(art)
    .composite([{ input: Buffer.from(veil) }])
    .png({ compressionLevel: 9 })
    .toFile("app/[locale]/opengraph-image.png");
  console.log("og home");
}

mkdirSync("public/og", { recursive: true });
for (const p of PROJECTS) await project(p);
await home();
