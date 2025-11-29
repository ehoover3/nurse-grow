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
    { from: /\bTEST\b/g, to: "T3ST" },
    { from: /\binformation\b/g, to: "info" },
    { from: /\bin order to\b/g, to: "to" },
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
