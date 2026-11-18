import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

/** Resolve a bibtexurl (absolute or site-relative) to its path under public/ and read it. */
export const localPath = (url: string) => (url.startsWith('http') ? new URL(url).pathname : url);

export function readBibtex(url?: string): string | undefined {
  if (!url) return undefined;
  const file = join(process.cwd(), 'public', localPath(url));
  if (!existsSync(file)) {
    throw new Error(`BibTeX file not found for ${url} (expected ${file})`);
  }
  return readFileSync(file, 'utf8').trim();
}
