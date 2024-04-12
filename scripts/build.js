// @ts-check

import { readFileSync, writeFileSync } from 'fs';

const README_FILE = 'README.md';

/** Contents that will be removed from the README file when building a GitHub Pages. */
const EXCLUDE_FROM_PAGES = [
  'https://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/',
  '(original lost)',
];
EXCLUDE_FROM_PAGES.forEach((content) => removeAll(README_FILE, content));

/**
 * Removes all occurrences of `content` from the file.
 *
 * @param {string} file - The path to the file.
 * @param {string} content - The content to remove.
 */
function removeAll(file, content) {
  const fileContent = readFileSync(file, { encoding: 'utf8' });

  // Use `split` instead of `replace` to avoid escaping.
  const newContent = fileContent.split(content).join('');
  writeFileSync(file, newContent, { encoding: 'utf8' });
}
