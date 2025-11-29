#!/usr/bin/env node

import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const targetFile = path.resolve(__dirname, "../data/quizzes.ts");

try {
  const content = readFileSync(targetFile, "utf8");

  // Match all questions inside quizzes.ts assuming they are like: question: "..."
  const questionRegex = /question:\s*"([^"]+)"/g;
  let match;
  const questionsFound = [];
  const lengths = [];

  let longestQuestion = "";
  let longestLength = 0;

  while ((match = questionRegex.exec(content)) !== null) {
    const question = match[1];
    questionsFound.push(question);
    const len = question.length;
    lengths.push(len);

    if (len > longestLength) {
      longestLength = len;
      longestQuestion = question;
    }
  }

  if (longestQuestion) {
    console.log("✅ Longest question found:");
    console.log(`Length: ${longestLength} characters`);
    console.log("Question:");
    console.log("----------");
    console.log(longestQuestion);
    console.log("----------\n");
  } else {
    console.log("⚠ No questions found in the file.");
  }

  console.log(`Total questions scanned: ${questionsFound.length}`);

  if (lengths.length > 0) {
    // Sort lengths
    lengths.sort((a, b) => a - b);

    // Helper function to get percentile value
    const percentile = (arr, p) => {
      const idx = (arr.length - 1) * p;
      const lower = Math.floor(idx);
      const upper = Math.ceil(idx);
      if (lower === upper) return arr[lower];
      return arr[lower] + (arr[upper] - arr[lower]) * (idx - lower);
    };

    const min = lengths[0];
    const q1 = percentile(lengths, 0.25);
    const median = percentile(lengths, 0.5);
    const q3 = percentile(lengths, 0.75);
    const max = lengths[lengths.length - 1];

    console.log("\n📊 Five-number summary of question lengths:");
    console.log(`0th percentile: ${min}`);
    console.log(`25th percentile: ${q1}`);
    console.log(`50th percentile: ${median}`);
    console.log(`75th percentile: ${q3}`);
    console.log(`100th percentile: ${max}`);
  }
} catch (err) {
  console.error("❌ Error reading file:", err);
  process.exit(1);
}
