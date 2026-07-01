import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), 'public', 'workflows');

function stripBom(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    return content.slice(1);
  }
  return content;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.json')) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = stripBom(content);
        const data = JSON.parse(content);
        
        let updated = false;
        if (data.tags && Array.isArray(data.tags)) {
          for (const tag of data.tags) {
            if (tag.name && tag.name.toLowerCase().includes('tier')) {
              const tierMatch = tag.name.match(/tier\s*(\d+)/i);
              if (tierMatch) {
                data.tier = parseInt(tierMatch[1], 10);
                updated = true;
                break;
              }
            }
          }
          // Remove tags
          delete data.tags;
          updated = true;
        }
        
        if (updated) {
          fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
          console.log(`Updated ${fullPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(workflowsDir);
console.log("Done formatting workflows.");
