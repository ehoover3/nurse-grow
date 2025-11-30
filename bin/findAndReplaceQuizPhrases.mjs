#!/usr/bin/env node

import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.resolve(__dirname, "../data/quizzes.ts");

try {
  let content = readFileSync(targetFile, "utf8");
  let originalContent = content;

  const replacements = [
    { from: /\binformation\b/g, to: "info" },
    { from: /\bin order to\b/g, to: "to" },
    { from: /\bpartial pressure of oxygen\b/g, to: "oxygen partial pressure" },
    { from: /\bpartial pressure of carbon dioxide\b/g, to: "carbon dioxide partial pressure" },
    { from: /\bcarbon dioxide\b/g, to: "CO₂" },
    { from: /\blower than that of\b/g, to: "lower than" },
    { from: /\bsecretion of ADH\b/g, to: "ADH secretion" },
    { from: /\bsecretion of atrial natriuretic peptide\b/g, to: "atrial natriuretic peptide secretion" },
    { from: /\bsecretion of renin\b/g, to: "renin secretion" },
    { from: /\bsecretion of stomach acid\b/g, to: "stomach acid secretion" },
    { from: /\bAssume that\b/g, to: "Assume" },
    { from: /\Suppose that\b/g, to: "Suppose" },
  ];

  let totalChanges = 0;
  const changeLog = [];

  replacements.forEach(({ from, to }) => {
    const before = content;
    content = content.replace(from, to);

    const occurrences = (before.match(from) || []).length;

    if (occurrences > 0) {
      totalChanges += occurrences;
      changeLog.push({
        from: from.toString(),
        to,
        occurrences,
      });

      console.log(`→ Replaced ${occurrences} occurrence(s) of ${from} → "${to}"`);
    }
  });

  writeFileSync(targetFile, content, "utf8");

  console.log("\n✔ quizzes.ts updated successfully");

  // Summary
  console.log("\n===== CHANGE SUMMARY =====");
  if (changeLog.length === 0) {
    console.log("No replacements were made.");
  } else {
    changeLog.forEach((log) => {
      console.log(`${log.occurrences}×  ${log.from} → "${log.to}"`);
    });

    console.log("\nTotal replacements:", totalChanges);
  }

  console.log("==========================\n");
} catch (err) {
  console.error("❌ Error:", err);
  process.exit(1);
}
