import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface ProcessPhase {
  phase: string;
  content: string;
}

interface ProcessTableProps {
  phases: ProcessPhase[];
  className?: string;
}

export function ProcessTable({ phases, className }: ProcessTableProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white overflow-hidden', className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              Fas
            </th>
            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
              Innehåll
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {phases.map((phase, index) => (
            <tr key={index} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-slate-900 whitespace-nowrap">
                {phase.phase}
              </td>
              <td className="px-6 py-4 text-sm text-slate-600">
                {phase.content}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
