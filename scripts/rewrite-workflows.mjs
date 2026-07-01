import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), 'public', 'workflows');

function stripBom(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    return content.slice(1);
  }
  return content;
}

function cleanText(text) {
  if (!text) return text;
  
  let cleaned = text;

  // Remove lines starting with specific developer jargon
  const jargonPrefixes = [
    'Credentials', 'Action', 'External Knowledge', 'Method', 'URL', 'Path', 
    'Operation', 'Value 2', 'Routing', 'Body Parameters', 'Inputs & Parameters', 
    'The Database', 'PDF Generator', 'The Asset'
  ];
  
  const lines = cleaned.split('\n');
  const filteredLines = lines.filter(line => {
    return !jargonPrefixes.some(prefix => line.trim().match(new RegExp(`^${prefix}(?: \\(.*\\))?:`, 'i')));
  });
  
  cleaned = filteredLines.join('\n');

  // Replace data mappings with business-friendly placeholders
  cleaned = cleaned.replace(/\{\{\s*\$json[^}]*\}\}/gi, '[Automated Data]');
  cleaned = cleaned.replace(/\{\{\s*\$now\s*\}\}/gi, '[Current Date]');
  cleaned = cleaned.replace(/\{\{\s*\$\('[^']+'\)[^}]*\}\}/gi, '[Automated Data]');

  // Remove n8n specific mentions
  cleaned = cleaned.replace(/inside n8n/gi, 'in the system');
  cleaned = cleaned.replace(/n8n expressions/gi, 'automated logic');
  cleaned = cleaned.replace(/n8n/gi, 'the platform');

  // Clean up extra spaces/newlines
  cleaned = cleaned.replace(/\n{2,}/g, '\n').trim();
  
  if (cleaned.length < 5) return undefined;
  return cleaned;
}

function cleanStickyText(text) {
  if (!text) return text;
  let lower = text.toLowerCase();
  
  if (lower.includes('before building') || lower.includes('preparation')) {
    return 'Ensures a secure connection to your database, CRM, and messaging platforms for seamless automated data sync.';
  }
  
  if (lower.includes('cta') || lower.includes('catcher')) {
    return 'Automatically captures incoming leads and inquiries the moment they engage with your digital assets.';
  }
  
  return cleanText(text);
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
        
        if (data.nodes && Array.isArray(data.nodes)) {
          // Remove sticky notes completely
          const originalLength = data.nodes.length;
          data.nodes = data.nodes.filter(node => node.type !== 'n8n-nodes-base.stickyNote');
          if (data.nodes.length !== originalLength) {
            updated = true;
          }

          for (let node of data.nodes) {
            
            // Remove credentials entirely
            if (node.credentials) {
              delete node.credentials;
              updated = true;
            }
            
            // Strip parameters for standard nodes to clean the file up
            if (node.parameters && Object.keys(node.parameters).length > 0) {
              delete node.parameters;
              updated = true;
            }
            
            if (node.notes) {
              const newNotes = cleanText(node.notes);
              if (newNotes !== node.notes) {
                node.notes = newNotes;
                updated = true;
              }
            }
          }
        }
        
        if (updated) {
          fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
          console.log(`Cleaned ${fullPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(workflowsDir);
console.log("Done rewriting workflows.");
