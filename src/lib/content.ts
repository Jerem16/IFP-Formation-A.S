import { promises as fs } from "fs";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function listMarkdownFiles() {
  async function walk(dir: string): Promise<{route: string, file: string}[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    const out: {route: string, file: string}[] = [];
    for (const e of entries) {
      const full = path.join(dir, e.name);
      const rel = path.relative(CONTENT_DIR, full);
      if (e.isDirectory()) {
        out.push(...await walk(full));
      } else if (e.isFile() && e.name.toLowerCase().endsWith(".md")) {
        const withoutExt = rel.split(path.sep).join("/").replace(/\.md$/i, "");
        out.push({ route: "/docs/" + withoutExt, file: rel });
      }
    }
    return out.sort((a, b) => a.route.localeCompare(b.route));
  }
  try {
    await fs.access(CONTENT_DIR);
  } catch {
    return [];
  }
  return walk(CONTENT_DIR);
}

export async function getMarkdownBySlug(slugPath: string): Promise<string | null> {
  const safeSlug = slugPath.replace(/^\/+|\/+$/g, "").replace(/\.+/g, ".");
  const filePath = path.join(CONTENT_DIR, safeSlug + ".md");
  try {
    const data = await fs.readFile(filePath, "utf8");
    return data;
  } catch {
    return null;
  }
}
