import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  time?: string;
  href: string;
  linkText?: string;
  className?: string;
}

export function ToolCard({ icon, title, description, time, href, linkText = 'Använd verktyget', className }: ToolCardProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white p-6 hover:shadow-card-hover transition-all duration-200', className)}>
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 mb-4">
        {icon}
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-1">{title}</h3>
      <p className="text-sm text-slate-600 mb-4">{description}</p>
      <div className="flex items-center justify-between">
        {time && (
          <span className="text-xs text-slate-400">~{time}</span>
        )}
        <Link
          href={href}
          className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors"
        >
          {linkText}
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
