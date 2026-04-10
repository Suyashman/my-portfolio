import { Prompt } from 'enquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure we are working with correct path relative to script
const DATA_FILE_PATH = path.resolve(__dirname, '../src/data/portfolio.js');

async function runManager() {
  console.clear();
  console.log("===============================");
  console.log("=== Portfolio Content Manager ===");
  console.log("===============================\n");

  const { default: enquirer } = await import('enquirer');

  try {
    const { action } = await enquirer.prompt({
      type: 'select',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'Add a new Project',
        'Add a new Certificate',
        'Add a new Skill',
        'Add Education entry',
        'View all current Projects',
        'View all current Certificates',
        'Exit'
      ]
    });

    if (action === 'Exit') {
      console.log('Goodbye!');
      process.exit(0);
    }

    if (action.startsWith('View')) {
      await viewSection(action);
    } else {
      await addEntry(action);
    }

  } catch (err) {
    console.log('\nExiting CLI...');
  }
}

async function viewSection(action) {
  const content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
  let regex;
  let sectionName;
  
  if (action.includes('Projects')) {
    regex = /export const projects = \[([\s\S]*?)\];/;
    sectionName = 'Projects';
  } else {
    regex = /export const certificates = \[([\s\S]*?)\];/;
    sectionName = 'Certificates';
  }

  const match = content.match(regex);
  if (match) {
    console.log(`\n--- Current ${sectionName} ---`);
    console.log(match[0]);
    console.log("----------------------------\n");
  } else {
    console.log(`\nCould not find ${sectionName} array in file.\n`);
  }
  
  setTimeout(runManager, 2000);
}

async function addEntry(action) {
  const { default: enquirer } = await import('enquirer');
  let newObjStr = '';
  let targetArrayName = '';

  if (action === 'Add a new Project') {
    targetArrayName = 'projects';
    const answers = await enquirer.prompt([
      { type: 'input', name: 'name', message: 'Project Name:' },
      { type: 'input', name: 'description', message: 'Short Description:' },
      { type: 'input', name: 'techStack', message: 'Tech Stack (comma-separated):' },
      { type: 'input', name: 'githubUrl', message: 'GitHub URL:' },
      { type: 'input', name: 'liveUrl', message: 'Live URL (optional, press enter to skip):' },
      { type: 'confirm', name: 'featured', message: 'Is this a featured project?' }
    ]);
    
    const stackArrayStr = answers.techStack.split(',').map(s => `"${s.trim()}"`).join(', ');
    newObjStr = `  {
    name: "${answers.name}",
    description: "${answers.description}",
    techStack: [${stackArrayStr}],
    githubUrl: "${answers.githubUrl}",
    liveUrl: "${answers.liveUrl || ''}",
    featured: ${answers.featured}
  }`;
  } 
  else if (action === 'Add a new Certificate') {
    targetArrayName = 'certificates';
    const answers = await enquirer.prompt([
      { type: 'input', name: 'title', message: 'Certificate Title:' },
      { type: 'input', name: 'platform', message: 'Issuing Platform:' },
      { type: 'input', name: 'date', message: 'Date (e.g. August 2025):' },
      { type: 'input', name: 'credentialUrl', message: 'Credential URL:' },
      { type: 'input', name: 'category', message: 'Category (e.g. Cloud, ML, Web Dev):' }
    ]);

    newObjStr = `  {
    title: "${answers.title}",
    platform: "${answers.platform}",
    date: "${answers.date}",
    credentialUrl: "${answers.credentialUrl}",
    category: "${answers.category}"
  }`;
  }
  else if (action === 'Add a new Skill') {
    targetArrayName = 'skills';
    const answers = await enquirer.prompt([
      { type: 'input', name: 'name', message: 'Skill Name:' },
      { type: 'input', name: 'category', message: 'Category:' },
      { type: 'numeral', name: 'proficiency', message: 'Proficiency (1-100):' }
    ]);

    newObjStr = `  { name: "${answers.name}", category: "${answers.category}", proficiency: ${answers.proficiency} }`;
  }
  else if (action === 'Add Education entry') {
    targetArrayName = 'education';
    const answers = await enquirer.prompt([
      { type: 'input', name: 'institution', message: 'Institution Name:' },
      { type: 'input', name: 'degree', message: 'Degree:' },
      { type: 'input', name: 'year', message: 'Year Range (e.g. 2020 - 2024):' },
      { type: 'input', name: 'score', message: 'GPA / Score:' },
      { type: 'input', name: 'coursework', message: 'Relevant Coursework:' }
    ]);

    newObjStr = `  {
    institution: "${answers.institution}",
    degree: "${answers.degree}",
    year: "${answers.year}",
    score: "${answers.score}",
    coursework: "${answers.coursework}"
  }`;
  }

  // Update file
  let content = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
  
  // Find the target array and append the new object before its closing bracket
  // Regex to find `export const targetArrayName = [\n ... \n];`
  const regexPattern = new RegExp(`(export\\s+const\\s+${targetArrayName}\\s*=\\s*\\[)([\\s\\S]*?)(\\];)`);
  
  if (regexPattern.test(content)) {
    content = content.replace(regexPattern, (match, p1, p2, p3) => {
      // Check if p2 is basically empty (just whitespace)
      const isArrEmpty = p2.trim().length === 0;
      // Add comma to previous last item if not empty and doesn't already have one
      let updatedP2 = p2;
      if (!isArrEmpty) {
        if (!updatedP2.trimEnd().endsWith(',')) {
          updatedP2 = updatedP2.replace(/(\s*)$/, ',$1');
        }
      }
      return `${p1}${updatedP2}\n${newObjStr}\n${p3}`;
    });

    fs.writeFileSync(DATA_FILE_PATH, content, 'utf-8');
    console.log(`\n✅ Done! Successfully added new entry to ${targetArrayName}.`);
    console.log("Run `npm run dev` to preview your changes.\n");
  } else {
    console.log(`\n❌ Error: Could not find array \`${targetArrayName}\` in source file.\n`);
  }

  const { repeat } = await enquirer.prompt({
    type: 'confirm',
    name: 'repeat',
    message: 'Would you like to do something else?',
    initial: true
  });

  if (repeat) {
    runManager();
  } else {
    console.log('Goodbye!');
    process.exit(0);
  }
}

runManager();
