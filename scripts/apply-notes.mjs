import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), 'public', 'workflows');
const overridesPath = path.join(process.cwd(), 'scripts', 'rephrase-data.json');
const overrides = JSON.parse(fs.readFileSync(overridesPath, 'utf8'));

function processDirectory(dir, rootDir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath, rootDir);
    } else if (fullPath.endsWith('.json')) {
      const relativePath = path.relative(rootDir, fullPath).replace(/\\/g, '/');
      const fileOverrides = overrides[relativePath];
      
      if (!fileOverrides) {
        console.warn(`No overrides found for ${relativePath}`);
        continue;
      }
      
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const data = JSON.parse(content);
        let updated = false;
        
        if (data.nodes && Array.isArray(data.nodes)) {
          for (let node of data.nodes) {
            const newNote = fileOverrides[node.name];
            if (newNote && node.notes !== newNote) {
              node.notes = newNote;
              updated = true;
            } else if (!newNote && node.type !== 'n8n-nodes-base.stickyNote') {
               // Fallback if missing in dictionary
               const fallback = "Automated process.";
               if (node.notes !== fallback) {
                 node.notes = fallback;
                 updated = true;
               }
            }
          }
        }
        
        if (updated) {
          fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
          console.log(`Updated notes in ${relativePath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(workflowsDir, workflowsDir);
console.log("Done applying segment-specific note rephrasings.");
