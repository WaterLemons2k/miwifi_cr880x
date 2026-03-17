// @ts-check

import { readFileSync, writeFileSync } from 'fs';

const README_FILE = 'README.md';

let content = readFileSync(README_FILE, 'utf8');
content = content.replaceAll(
  'https://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/',
  ''
);
content = content.replaceAll('c0d19_6.2.239_ispver-6.0.10', '6.2.239_ispver');
writeFileSync(README_FILE, content, 'utf8');
