import fs from "node:fs";
import path from "node:path";

const outputPath = path.resolve("public", "Update v1 resume.pdf");

const marginX = 44;
const pageWidth = 612;
const pageHeight = 792;
const bottomMargin = 46;
const contentWidth = pageWidth - marginX * 2;

const resume = [
  {
    type: "header",
    name: "MARLONE TROY DOMINGUIANO",
    title: "AI-Assisted Full Stack Developer | AI Content Creator | Prompt Engineer",
    contact: [
      "Email: marlonetroy00@gmail.com",
      "GitHub: github.com/troy-23",
      "Portfolio: dev-mtmd-portfolio",
      "Instagram: @lone.yort",
    ],
  },
  {
    type: "section",
    title: "PROFILE",
    lines: [
      "Graduating developer focused on AI-assisted full stack web development, prompt engineering, and AI content creation. Builds practical landing pages, business websites, e-commerce concepts, automation workflows, and generative media using modern AI tools and production web stacks. Strong at turning unclear ideas into prompts, prototypes, deployed products, and content systems.",
    ],
  },
  {
    type: "section",
    title: "CORE SKILLS",
    lines: [
      "Web Development: React, TypeScript, Next.js, Vite, Tailwind CSS, shadcn/ui, Framer Motion, GSAP",
      "Backend and Data: Supabase, PostgreSQL, authentication concepts, API development, edge functions",
      "AI and Prompting: OpenAI, Claude, Gemini, prompt design, AI-assisted coding, workflow planning",
      "AI Content Creation: Veo, Pika, ElevenLabs, CapCut, scriptwriting, voice synthesis, product animation concepts",
      "Deployment and Tools: Vercel, Cloudflare Workers, Docker, GitHub, Cursor, Copilot, Windsurf, Codex",
      "Technical Support: PC assembly, hardware troubleshooting, diagnostics, software setup",
    ],
  },
  {
    type: "section",
    title: "SELECTED PROJECTS",
    items: [
      {
        name: "Kensei - Product Mockup Website",
        meta: "React, TypeScript, Tailwind CSS",
        bullets: [
          "Built a modern product storytelling mockup with refined typography, clean UI structure, and AI-assisted content direction.",
          "Used AI-assisted workflows to move from concept planning to responsive implementation and deployment.",
        ],
      },
      {
        name: "YortyCollects - Collectibles E-Commerce Platform",
        meta: "React, Tailwind CSS, AI-assisted content workflow",
        bullets: [
          "Created an e-commerce concept for a collectibles business with storefront structure and product-focused presentation.",
          "Supported real business content direction through AI-generated media ideas and product animation planning.",
        ],
      },
      {
        name: "Casimiro GPU Repair Shop - Service Landing Page",
        meta: "React 19, TypeScript, Vite 6, Tailwind CSS v4, GSAP, Framer Motion, Vercel",
        bullets: [
          "Developed a professional repair shop landing page with service-focused copy, responsive layout, and scroll animations.",
          "Deployed the site on Vercel and structured the page for fast scanning by potential customers.",
        ],
      },
      {
        name: "2K26 Pilot Service - Service Landing Page",
        meta: "React 19, TypeScript, Vite 6, Tailwind CSS v4, Vercel",
        bullets: [
          "Built a modern landing page for a game service offer with clear positioning, fast load times, and responsive UI.",
        ],
      },
      {
        name: "Maritime AI Video Demo",
        meta: "ChatGPT, Gemini, Pika, ElevenLabs, CapCut",
        bullets: [
          "Produced an AI-assisted video workflow from concept planning and scriptwriting to voice generation, visuals, and final editing.",
        ],
      },
    ],
  },
  {
    type: "section",
    title: "EXPERIENCE",
    items: [
      {
        name: "Freelance AI-Assisted Developer and Content Creator",
        meta: "Project-based | Web development, AI workflows, content production",
        bullets: [
          "Delivered practical websites, prototypes, and landing pages for small business and creator-focused use cases.",
          "Used AI tools to accelerate requirements planning, copywriting, UI ideation, code implementation, debugging, and iteration.",
          "Created AI-assisted scripts, voiceovers, visual concepts, and product content for social and business channels.",
        ],
      },
    ],
  },
  {
    type: "section",
    title: "EDUCATION",
    lines: [
      "Graduating student pursuing work in software development, AI-assisted development, prompt engineering, and AI content creation.",
    ],
  },
];

const pages = [];
let commands = [];
let y = 748;

function escapePdfText(value) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function addRaw(command) {
  commands.push(command);
}

function addText(text, x, size, options = {}) {
  const { font = "F1", leading = size + 4 } = options;
  addRaw(`BT /${font} ${size} Tf ${x} ${y} Td (${escapePdfText(text)}) Tj ET`);
  y -= leading;
}

function addLine(x1, x2) {
  addRaw(`0.82 0.86 0.9 RG ${x1} ${y} m ${x2} ${y} l S`);
  y -= 12;
}

function wrapText(text, maxChars) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines;
}

function ensureSpace(heightNeeded) {
  if (y - heightNeeded >= bottomMargin) return;
  pages.push(commands.join("\n"));
  commands = [];
  y = 748;
}

function sectionTitle(title) {
  ensureSpace(34);
  y -= 4;
  addText(title, marginX, 10, { font: "F2", leading: 15 });
  addLine(marginX, pageWidth - marginX);
}

function paragraph(text) {
  const lines = wrapText(text, 104);
  ensureSpace(lines.length * 13 + 4);
  for (const line of lines) addText(line, marginX, 9.2, { leading: 12.5 });
  y -= 3;
}

function bullet(text) {
  const lines = wrapText(text, 96);
  ensureSpace(lines.length * 12 + 2);
  addText(`- ${lines[0]}`, marginX + 12, 8.9, { leading: 12 });
  for (const line of lines.slice(1)) addText(`  ${line}`, marginX + 12, 8.9, { leading: 12 });
}

for (const block of resume) {
  if (block.type === "header") {
    addText(block.name, marginX, 20, { font: "F2", leading: 24 });
    addText(block.title, marginX, 10.5, { leading: 15 });
    for (const contact of block.contact) addText(contact, marginX, 8.8, { leading: 11.5 });
    y -= 4;
    addLine(marginX, pageWidth - marginX);
    continue;
  }

  sectionTitle(block.title);

  if (block.lines) {
    for (const line of block.lines) paragraph(line);
  }

  if (block.items) {
    for (const item of block.items) {
      ensureSpace(46);
      addText(item.name, marginX, 10, { font: "F2", leading: 13 });
      addText(item.meta, marginX, 8.8, { leading: 12 });
      for (const point of item.bullets) bullet(point);
      y -= 4;
    }
  }
}

pages.push(commands.join("\n"));

function buildPdf(pageStreams) {
  const objects = [];
  const addObject = (body) => {
    objects.push(body);
    return objects.length;
  };

  const catalogId = addObject("<< /Type /Catalog /Pages 2 0 R >>");
  const pagesId = addObject("");
  const fontRegularId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBoldId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");

  const pageIds = [];
  for (const stream of pageStreams) {
    const streamLength = Buffer.byteLength(stream, "utf8");
    const contentId = addObject(`<< /Length ${streamLength} >>\nstream\n${stream}\nendstream`);
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${pageWidth} ${pageHeight}] /Resources << /Font << /F1 ${fontRegularId} 0 R /F2 ${fontBoldId} 0 R >> >> /Contents ${contentId} 0 R >>`,
    );
    pageIds.push(pageId);
  }

  objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (let i = 0; i < objects.length; i += 1) {
    offsets.push(Buffer.byteLength(pdf, "utf8"));
    pdf += `${i + 1} 0 obj\n${objects[i]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "utf8");
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;
  return pdf;
}

fs.writeFileSync(outputPath, buildPdf(pages));
console.log(`Generated ${outputPath}`);
