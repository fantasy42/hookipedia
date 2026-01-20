import {source} from '@/lib/source';

export const revalidate = false;

export async function GET() {
  const scanned: string[] = ['# Docs'];
  const map = new Map<string, string[]>();

  for (const page of source.getPages()) {
    const section = 'docs';
    const list = map.get(section) ?? [];
    list.push(`- [${page.data.title}](${page.url}): ${page.data.description}`);
    map.set(section, list);
  }

  for (const [key, value] of map) {
    scanned.push(`## ${key}`, value.join('\n'));
  }

  return new Response(scanned.join('\n\n'));
}
