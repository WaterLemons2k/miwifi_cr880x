// @ts-check

import { readFileSync, writeFileSync } from "fs";

const README_FILE = "README.md";
const FIRMWARE_URL_PREFIX = "https://cdn.cnbj1.fds.api.mi-img.com/xiaoqiang/";

// Remove all firmware URL prefixes from the README file because
// we want all firmware to be downloadable from a local copy.
removeAll(README_FILE, FIRMWARE_URL_PREFIX);

/**
 * Removes all occurrences of `content` from the file.
 *
 * @param {string} file - The path to the file.
 * @param {string} content - The content to remove.
 */
function removeAll(file, content) {
  const fileContent = readFileSync(file, { encoding: "utf8" });
  const newContent = fileContent.replace(new RegExp(content, "g"), "");

  writeFileSync(file, newContent, { encoding: "utf8" });
}
