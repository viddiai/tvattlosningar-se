'use client';

import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface ChecklistItem {
  label: string;
  checked?: boolean;
}

interface ChecklistProps {
  title: string;
  items: ChecklistItem[];
  className?: string;
}

export function Checklist({ title, items, className }: ChecklistProps) {
  const [checkedItems, setCheckedItems] = React.useState<boolean[]>(
    items.map(item => item.checked ?? false)
  );

  const toggleItem = (index: number) => {
    setCheckedItems(prev => {
      const newChecked = [...prev];
      newChecked[index] = !newChecked[index];
      return newChecked;
    });
  };

  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6', className)}>
      <h3 className="text-lg font-semibold text-slate-900 mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex items-center gap-3 cursor-pointer group">
              <span
                className={cn(
                  'flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all duration-200',
                  checkedItems[index]
                    ? 'border-brand-500 bg-brand-500'
                    : 'border-slate-300 group-hover:border-slate-400'
                )}
                onClick={() => toggleItem(index)}
              >
                {checkedItems[index] && (
                  <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10.28 2.28a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 01-1.06 0l-2.5-2.5a.75.75 0 011.06-1.06L4.5 7.44l4.97-4.97a.75.75 0 011.06 0z" />
                  </svg>
                )}
              </span>
              <span className={cn(
                'text-sm transition-colors',
                checkedItems[index] ? 'text-slate-500 line-through' : 'text-slate-700'
              )}>
                {item.label}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
