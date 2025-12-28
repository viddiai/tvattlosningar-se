import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
  className?: string;
}

export function Stats({ stats, className }: StatsProps) {
  return (
    <div className={cn('grid grid-cols-2 gap-8 md:grid-cols-4', className)}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold tracking-tight text-brand-600 md:text-5xl">
            {stat.value}
          </div>
          <div className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
