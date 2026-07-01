import fs from 'fs';
import path from 'path';

const workflowsDir = path.join(process.cwd(), 'public', 'workflows');
const outputFile = path.join(process.cwd(), 'src', 'data', 'automations.ts');

const folderMapping = {
  "CA-firms": { verticalId: "professional-services", segmentId: "ca-tax" },
  "interior-designer": { verticalId: "real-estate", segmentId: "interior-architect" },
  "ivf-clinics": { verticalId: "healthcare", segmentId: "ivf-clinic" },
  "law-firms": { verticalId: "professional-services", segmentId: "law-firm" },
  "mental-health-clinics": { verticalId: "healthcare", segmentId: "mental-wellness" },
  "path-labs": { verticalId: "healthcare", segmentId: "pathology-lab" },
  "visa-consultant": { verticalId: "professional-services", segmentId: "immigration-visa" }
};

function formatNodeType(type) {
  if (!type) return "Unknown";
  const parts = type.split('.');
  let name = parts[parts.length - 1];
  name = name.replace(/([A-Z])/g, ' $1').trim();
  name = name.charAt(0).toUpperCase() + name.slice(1);
  return name;
}

function processDirectory(dir, currentFolder = "") {
  let automations = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      automations = automations.concat(processDirectory(fullPath, file));
    } else if (fullPath.endsWith('.json')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        const data = JSON.parse(content);
        
        let triggers = new Set();
        let actions = new Set();
        let totalNodes = 0;
        
        if (data.nodes && Array.isArray(data.nodes)) {
          totalNodes = data.nodes.length;
          for (const node of data.nodes) {
            const typeName = formatNodeType(node.type);
            if (node.type && node.type.toLowerCase().includes('trigger')) {
              triggers.add(typeName);
            } else if (node.type && node.type.toLowerCase().includes('webhook')) {
              triggers.add(typeName);
            } else {
              actions.add(typeName);
            }
          }
        }
        
        const relativePath = path.relative(path.join(process.cwd(), 'public'), fullPath).replace(/\\/g, '/');
        
        let verticalId = "cross-vertical";
        let segmentId = undefined;
        
        if (currentFolder && folderMapping[currentFolder]) {
          verticalId = folderMapping[currentFolder].verticalId;
          segmentId = folderMapping[currentFolder].segmentId;
        }

        const id = file.replace('.json', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        
        automations.push({
          id: id + (segmentId ? `-${segmentId}` : ''),
          name: data.name || file.replace('.json', ''),
          description: "Automated workflow for " + (data.name || file.replace('.json', '')),
          verticalId,
          segmentId,
          tier: data.tier,
          complexity: totalNodes > 10 ? "Complex" : totalNodes > 4 ? "Medium" : "Simple",
          timeSavedHours: totalNodes * 5,
          workflowJsonPath: `/${relativePath}`,
          nodeSummary: {
            total: totalNodes,
            triggers: Array.from(triggers).slice(0, 3),
            actions: Array.from(actions).slice(0, 3)
          }
        });

      } catch (err) {
        console.error(`Error processing ${fullPath}:`, err);
      }
    }
  }
  return automations;
}

const allAutomations = processDirectory(workflowsDir);

const outputContent = `import { AutomationEntry } from "@/lib/types";

export const automations: AutomationEntry[] = ${JSON.stringify(allAutomations, null, 2)};
`;

fs.writeFileSync(outputFile, outputContent, 'utf8');
console.log("Generated automations.ts");
