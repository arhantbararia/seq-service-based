import { Handle, Position } from "@xyflow/react";
import { Layers, Webhook, Database, Mail, GitBranch, ArrowRightLeft, MessageCircle, Clock, StickyNote, Shuffle } from "lucide-react";

const getIconForType = (type: string) => {
  if (!type) return <Layers className="w-4 h-4 text-slate-400" />;
  if (type.includes("webhook")) return <Webhook className="w-4 h-4 text-pink-400" />;
  if (type.includes("googleSheets") || type.includes("postgres") || type.includes("supabase")) return <Database className="w-4 h-4 text-emerald-400" />;
  if (type.includes("email") || type.includes("gmail") || type.includes("smtp")) return <Mail className="w-4 h-4 text-sky-400" />;
  if (type.includes("if") || type.includes("filter")) return <GitBranch className="w-4 h-4 text-amber-400" />;
  if (type.includes("set") || type.includes("transform") || type.includes("code")) return <ArrowRightLeft className="w-4 h-4 text-violet-400" />;
  if (type.includes("whatsapp") || type.includes("telegram") || type.includes("slack")) return <MessageCircle className="w-4 h-4 text-green-500" />;
  if (type.includes("schedule") || type.includes("cron")) return <Clock className="w-4 h-4 text-blue-400" />;
  if (type.includes("stickyNote")) return <StickyNote className="w-4 h-4 text-yellow-500" />;
  if (type.includes("switch") || type.includes("merge")) return <Shuffle className="w-4 h-4 text-orange-400" />;
  return <Layers className="w-4 h-4 text-slate-400" />;
};

export function N8nNode({ data }: { data: any }) {
  return (
    <div className="bg-[var(--color-background-secondary)] border border-[var(--color-border-subtle)] rounded-lg shadow-xl min-w-[200px] max-w-[250px] font-sans">
      <Handle type="target" position={Position.Left} className="w-2 h-4 rounded-sm bg-[var(--color-accent-primary)] border-none" />
      
      <div className="p-3 border-b border-[var(--color-border-subtle)] flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-[var(--color-background-tertiary)] flex items-center justify-center shrink-0">
          {getIconForType(data.type)}
        </div>
        <div className="text-sm font-semibold text-[var(--color-text-primary)] truncate">
          {data.label}
        </div>
      </div>
      
      {data.notes && (
        <div className="p-3 bg-[var(--color-background-primary)]/50 rounded-b-lg">
          <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-medium">
            {data.notes}
          </p>
        </div>
      )}

      <Handle type="source" position={Position.Right} className="w-2 h-4 rounded-sm bg-[var(--color-accent-primary)] border-none" />
    </div>
  );
}
