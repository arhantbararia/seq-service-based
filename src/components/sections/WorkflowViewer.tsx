"use client";

import { useEffect, useState, useMemo } from "react";
import { 
  ReactFlow, 
  Controls, 
  Background, 
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  MarkerType,
  Node,
  Edge
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { N8nNode } from "./N8nNode";

interface WorkflowViewerProps {
  jsonUrl: string;
}

export function WorkflowViewer({ jsonUrl }: WorkflowViewerProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);
  const [loading, setLoading] = useState(true);

  const nodeTypes = useMemo(() => ({ n8n: N8nNode }), []);

  useEffect(() => {
    async function loadWorkflow() {
      try {
        setLoading(true);
        const res = await fetch(jsonUrl);
        const data = await res.json();
        
        // Parse Nodes
        const parsedNodes = data.nodes.map((node: any) => ({
          id: node.name,
          type: 'n8n',
          position: { x: node.position[0], y: node.position[1] },
          data: { 
            label: node.name, 
            type: node.type,
            notes: node.notes 
          },
        }));
        
        // Parse Edges
        const parsedEdges: any[] = [];
        if (data.connections) {
          Object.entries(data.connections).forEach(([sourceNode, outputChannels]: [string, any]) => {
            if (outputChannels.main && outputChannels.main.length > 0) {
              outputChannels.main.forEach((channelOutputs: any[], outputIndex: number) => {
                if(channelOutputs && channelOutputs.length > 0) {
                  channelOutputs.forEach((target: any) => {
                    parsedEdges.push({
                      id: `e-${sourceNode}-${target.node}`,
                      source: sourceNode,
                      target: target.node,
                      animated: true,
                      style: { stroke: 'var(--color-accent-primary)', strokeWidth: 2 },
                      markerEnd: {
                        type: MarkerType.ArrowClosed,
                        color: 'var(--color-accent-primary)',
                      },
                    });
                  });
                }
              });
            }
          });
        }
        
        setNodes(parsedNodes);
        setEdges(parsedEdges);
      } catch (e) {
        console.error("Failed to load workflow JSON", e);
      } finally {
        setLoading(false);
      }
    }
    
    if(jsonUrl) loadWorkflow();
  }, [jsonUrl, setNodes, setEdges]);

  if (loading) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center bg-[var(--color-background-primary)] rounded-xl border border-[var(--color-border-subtle)]">
        <div className="w-8 h-8 rounded-full border-2 border-[var(--color-accent-primary)] border-t-transparent animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] rounded-xl border border-[var(--color-border-subtle)] overflow-hidden bg-[var(--color-background-primary)]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        proOptions={{ hideAttribution: true }}
        className="dark"
      >
        <Background color="var(--color-border-subtle)" variant={BackgroundVariant.Dots} />
        <Controls showInteractive={false} className="bg-[var(--color-background-secondary)] border-[var(--color-border-subtle)] fill-[var(--color-text-primary)]" />
      </ReactFlow>
    </div>
  );
}
