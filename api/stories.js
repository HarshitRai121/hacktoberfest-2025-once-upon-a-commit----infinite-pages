import fs from 'fs/promises';
import path from 'path';

// Repo details are hardcoded since we are not using environment variables.
const REPO_OWNER = 'HarshitRai121';
const REPO_NAME = 'hacktoberfest-2025-once-upon-a-commit----infinite-pages';

export default async function handler(req, res) {
  try {
    // 1. Fetch contributors from the GitHub API (unauthenticated)
    const contributorsRes = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contributors`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      }
    });

    // Check for API rate limit or other issues
    if (!contributorsRes.ok) {
      console.error(`GitHub API Error: ${contributorsRes.statusText}`);
      // Fallback gracefully without contributor data
      const chapters = await processStoryNodes();
      return res.status(200).json({ 
        chapters,
        contributors: [] // Return an empty array for contributors
      });
    }
    
    const githubContributors = await contributorsRes.json();
    const contributorsMap = {};
    githubContributors.forEach(contributor => {
      contributorsMap[contributor.login] = {
        login: contributor.login,
        avatar_url: contributor.avatar_url,
        contributedNodes: []
      };
    });

    // 2. Read story nodes and associate authors
    const chapters = await processStoryNodes(contributorsMap);
    
    // 3. Send combined data
    res.status(200).json({ 
      chapters,
      contributors: Object.values(contributorsMap)
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process stories and contributors.', details: error.message });
  }
}

// Helper function to process story nodes
async function processStoryNodes(contributorsMap = {}) {
  const storynodesDir = path.join(process.cwd(), 'storynodes');
  const files = await fs.readdir(storynodesDir);
  return await Promise.all(files.filter(file => file.endsWith('.md')).map(async (filename) => {
    const filePath = path.join(storynodesDir, filename);
    const fullContent = await fs.readFile(filePath, 'utf8');
    
    const [metadataRaw, ...contentLines] = fullContent.split('---').filter(Boolean);
    const metadata = metadataRaw.trim().split('\n').reduce((acc, line) => {
      const [key, ...value] = line.split(': ');
      if (key && value) acc[key.trim()] = value.join(': ').trim();
      return acc;
    }, {});
    
    // Associate author with this story node
    if (metadata.author && contributorsMap[metadata.author]) {
      contributorsMap[metadata.author].contributedNodes.push(filename);
    }
    
    return {
      filename,
      metadata,
      content: contentLines.join('---').trim(),
    };
  }));
}