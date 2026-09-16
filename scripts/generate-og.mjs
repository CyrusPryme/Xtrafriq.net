import { mkdir } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const width = 1200
const height = 630
const backgroundPath = path.join(
  root,
  "public/c00bce58c817ec3a16945711111641d37320ae67-2240x1260.png",
)
const logoPath = path.join(root, "public/logo.jpg")
const outputPath = path.join(root, "public/og-default.jpg")

const overlay = Buffer.from(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#071422" stop-opacity="0.22"/>
      <stop offset="52%" stop-color="#071422" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#071422" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="72" y="470" fill="#ffffff" font-size="40" font-family="DejaVu Sans, Liberation Sans, sans-serif" font-weight="700">Xtrafriq Tech Consult</text>
  <text x="72" y="522" fill="#d7ecec" font-size="26" font-family="DejaVu Sans, Liberation Sans, sans-serif">Product management and tech services from Accra</text>
  <text x="72" y="564" fill="#e0b84c" font-size="20" font-family="DejaVu Sans, Liberation Sans, sans-serif">Digital products that scale</text>
</svg>`)

const [base, logo] = await Promise.all([
  sharp(backgroundPath).resize(width, height, { fit: "cover", position: "centre" }).toBuffer(),
  sharp(logoPath).resize(88, 88, { fit: "cover" }).png().toBuffer(),
])

await mkdir(path.dirname(outputPath), { recursive: true })
await sharp(base)
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: logo, top: 64, left: 72 },
  ])
  .jpeg({ quality: 84, progressive: true, mozjpeg: true })
  .toFile(outputPath)

console.log(`Wrote ${outputPath}`)
