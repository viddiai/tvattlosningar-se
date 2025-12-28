import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface ChallengeCardProps {
  icon: React.ReactNode;
  title: string;
  problem: string;
  solution: string;
  className?: string;
}

export function ChallengeCard({ icon, title, problem, solution, className }: ChallengeCardProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6 hover:shadow-card-hover transition-all duration-200', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-3">{title}</h3>
      <div className="space-y-2 text-sm">
        <p className="text-slate-600">
          <span className="font-medium text-slate-700">Problem:</span> {problem}
        </p>
        <p className="text-slate-600">
          <span className="font-medium text-emerald-600">Lösning:</span> {solution}
        </p>
      </div>
    </div>
  );
}
