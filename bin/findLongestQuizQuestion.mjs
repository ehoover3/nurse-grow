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
    const tenth = percentile(lengths, 0.1);
    const twentieth = percentile(lengths, 0.2);
    const thirtieth = percentile(lengths, 0.3);
    const fortieth = percentile(lengths, 0.4);
    const median = percentile(lengths, 0.5);
    const sixtieth = percentile(lengths, 0.6);
    const seventieth = percentile(lengths, 0.7);
    const eightieth = percentile(lengths, 0.8);
    const ninetieth = percentile(lengths, 0.9);
    const max = lengths[lengths.length - 1];

    console.log("\n📊 Five-number summary of question lengths:");
    console.log(`0th percentile: ${min}`);
    console.log(`10th percentile: ${tenth}`);
    console.log(`20th percentile: ${twentieth}`);
    console.log(`30th percentile: ${thirtieth}`);
    console.log(`40th percentile: ${fortieth}`);
    console.log(`50th percentile: ${median}`);
    console.log(`60th percentile: ${sixtieth}`);
    console.log(`70th percentile: ${seventieth}`);
    console.log(`80th percentile: ${eightieth}`);
    console.log(`90th percentile: ${ninetieth}`);
    console.log(`100th percentile: ${max}`);
  }
} catch (err) {
  console.error("❌ Error reading file:", err);
  process.exit(1);
}
