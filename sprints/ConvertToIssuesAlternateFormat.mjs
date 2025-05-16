import fs from 'fs';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const REPO_OWNER = 'desert-digital';
const REPO_NAME = 'compass-frontend';

// Load and prepare the markdown content
const markdown = fs.readFileSync('sprint_9_user_stories_with_criteria.md', 'utf8');

const normalizeQuotes = str => str.replace(/[‘’]/g, "'").replace(/[“”]/g, '"');

// Split by numbered user story headers
const userStoryBlocks = markdown.split(/\n#### \d+\.\s+/).slice(1); // Skip header before first story

const createIssue = async (title, body) => {
    try {
        const response = await axios.post(
            `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
            { title, body },
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                    Accept: 'application/vnd.github.v3+json',
                },
            }
        );
        console.log(`✅ Created issue: ${title}`);
    } catch (error) {
        console.error(`❌ Error creating issue "${title}":`, error.response?.data || error.message);
    }
};

const parseAndCreateIssues = async () => {
    for (let i = 0; i < userStoryBlocks.length; i++) {
        const rawBlock = userStoryBlocks[i].trim();
        const block = normalizeQuotes(rawBlock);

        const lines = block.split('\n');
        const candidateLine = lines.find((line) => line.includes('I want')) || lines[0];

        const personaMatch = candidateLine.match(/\*\*(.*?)\*\*/);
        // ✅ Fix: generalize goal phrase after "so I"
        const actionGoalMatch = candidateLine.match(/I want(?: to)? (.*?),\s*so I (.*)/i);

        const criteriaMatch = block.match(/- \*\*Success Criteria\*\*:(.*)/is);

        const persona = personaMatch ? personaMatch[1].trim() : 'Unknown';
        const action = actionGoalMatch ? actionGoalMatch[1].trim() : '[Action missing]';
        const goal = actionGoalMatch ? actionGoalMatch[2].trim().replace(/\.$/, '') : '[Goal missing]';
        const criteria = criteriaMatch ? criteriaMatch[1].trim().replace(/^- /gm, '') : '';

        const actionForTitle = action.charAt(0).toUpperCase() + action.slice(1);
        const title = `US009-${i}: ${actionForTitle}.`;
        const body = `
**Persona**: ${persona}  
**Story**: As a ${persona}, I want to ${action}, so I can ${goal}.

### Acceptance Criteria  
${criteria.startsWith('-') ? criteria : '- ' + criteria.replace(/\n/g, '\n- ')}`.trim();

        await createIssue(title, body);
    }
};

parseAndCreateIssues();
