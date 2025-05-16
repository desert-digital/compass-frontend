// create_issues_from_userstories.js
import fs from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const FILE_NAME = 'sprint_5_user_stories_with_criteria.md'; // Path to your markdown file
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'desert-digital';
const REPO_NAME = 'compass-frontend';

const markdown = fs.readFileSync(FILE_NAME, 'utf8');

// Split the content by each user story
// Split based on the heading and retain the ID
const stories = markdown.split('## User Story:').slice(1);

const createIssue = async (title, body) => {
  try {
    const response = await axios.post(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        title,
        body
      },
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json'
        }
      }
    );
    console.log(`✅ Created issue: ${title}`);
  } catch (err) {
    console.error(`❌ Error creating issue "${title}":`, err.response?.data || err.message);
  }
};

const parseAndCreateIssues = async () => {
  for (const block of stories) {
    const trimmedBlock = block.trim();
    const idMatch = trimmedBlock.match(/^([A-Z]{2}\d{3})/);

    const id = idMatch ? idMatch[1].trim() : 'UNKNOWN';

    const persona = block.match(/\*\*Persona\*\*: (.+?)\s/);
    const story = block.match(/\*\*Story\*\*: (.+?)\s*\n/);
    const criteria = block.match(/\*\*Acceptance Criteria\*\*:[\s\S]*?(?=\n### Tasks)/);
    const tasks = block.match(/### Tasks\n([\s\S]*)/);

    const title = `${id}: ${story ? story[1] : 'No title'}`;
    const body = `
**Persona**: ${persona ? persona[1] : 'Unknown'}  
**User Story**: ${story ? story[1] : 'Unknown'}

${criteria ? criteria[0].replace('**Acceptance Criteria**:', '### Acceptance Criteria') : ''}
${tasks ? '### Tasks\n' + tasks[1].trim() : ''}
    `.trim();

    await createIssue(title, body);
  }
};

parseAndCreateIssues();
