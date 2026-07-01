import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), 'public', 'workflows');

const typeToNoteMap = {
  // Triggers
  "n8n-nodes-base.scheduleTrigger": "Runs automatically on a set schedule.",
  "n8n-nodes-base.webhook": "Instantly captures incoming data.",
  "n8n-nodes-base.emailReadImap": "Monitors inbox for new inquiries.",
  
  // Data / Logic
  "n8n-nodes-base.googleSheets": "Syncs data with your secure database.",
  "n8n-nodes-base.if": "Evaluates conditions to route the workflow.",
  "n8n-nodes-base.switch": "Directs data to the correct next step.",
  "n8n-nodes-base.splitInBatches": "Processes multiple records one by one.",
  "n8n-nodes-base.set": "Formats data for the next step.",
  "n8n-nodes-base.code": "Applies custom business logic.",
  "n8n-nodes-base.editFields": "Organizes data for the next step.",
  
  // Messaging
  "n8n-nodes-base.whatsApp": "Sends a personalized WhatsApp message.",
  "n8n-nodes-base.emailSend": "Sends an automated email notification.",
  "n8n-nodes-base.gmail": "Sends an automated email notification.",
  "n8n-nodes-base.smtp": "Sends an automated email notification."
};

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.json')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const data = JSON.parse(content);
        let updated = false;
        
        if (data.nodes && Array.isArray(data.nodes)) {
          for (let node of data.nodes) {
            // Only update non-sticky notes
            if (node.type !== 'n8n-nodes-base.stickyNote') {
              const cleanNote = typeToNoteMap[node.type] || "Executes automated task.";
              if (node.notes !== cleanNote) {
                node.notes = cleanNote;
                updated = true;
              }
            }
          }
        }
        
        if (updated) {
          fs.writeFileSync(fullPath, JSON.stringify(data, null, 2), 'utf8');
          console.log(`Rephrased notes in ${fullPath}`);
        }
      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
}

processDirectory(workflowsDir);
console.log("Done rephrasing notes.");
