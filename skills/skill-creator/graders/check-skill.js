import { readFileSync } from 'node:fs';

const skill = readFileSync('draft/SKILL.md', 'utf8');

const checks = [];
let passed = 0;

function addCheck(name, condition, message) {
  checks.push({ name, passed: condition, message: condition ? 'OK' : message });
  if (condition) passed += 1;
}

addCheck('frontmatter', /^---\n[\s\S]*?\n---/m.test(skill), 'Missing YAML frontmatter');
addCheck('name', /name:\s*skill-creator\b/.test(skill), 'name must be skill-creator');
addCheck('description', /description:\s*.+/.test(skill), 'description missing');
addCheck('usage', /## When to Use This Skill/.test(skill), 'Missing usage section');
addCheck('error-handling', /## Error Handling/.test(skill), 'Missing error handling section');
addCheck('no-readme', !/README\.md/.test(skill), 'Should not mention README.md');

const score = (passed / checks.length).toFixed(2);
console.log(JSON.stringify({
  score: Number(score),
  details: `${passed}/${checks.length} checks passed`,
  checks,
}));
