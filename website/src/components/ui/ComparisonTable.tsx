import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface ComparisonOption {
  name: string;
  recommended?: boolean;
  features: Record<string, string | boolean>;
}

interface ComparisonTableProps {
  options: ComparisonOption[];
  features: string[];
  className?: string;
}

export function ComparisonTable({ options, features, className }: ComparisonTableProps) {
  return (
    <div className={cn('rounded-xl border border-slate-200 bg-white overflow-hidden', className)}>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-50">
                Funktion
              </th>
              {options.map((option, index) => (
                <th
                  key={index}
                  className={cn(
                    'px-6 py-4 text-center text-sm font-semibold',
                    option.recommended
                      ? 'bg-brand-500 text-white'
                      : 'bg-slate-50 text-slate-900'
                  )}
                >
                  {option.name}
                  {option.recommended && (
                    <span className="ml-2 inline-flex items-center rounded-full bg-white/20 px-2 py-0.5 text-xs">
                      Rekommenderat
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {features.map((feature, featureIndex) => (
              <tr key={featureIndex} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-sm text-slate-700">
                  {feature}
                </td>
                {options.map((option, optionIndex) => {
                  const value = option.features[feature];
                  return (
                    <td
                      key={optionIndex}
                      className={cn(
                        'px-6 py-4 text-center text-sm',
                        option.recommended ? 'bg-brand-50/50' : ''
                      )}
                    >
                      {typeof value === 'boolean' ? (
                        value ? (
                          <svg className="mx-auto h-5 w-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-slate-300">—</span>
                        )
                      ) : (
                        <span className={cn(
                          'text-sm',
                          option.recommended ? 'font-medium text-brand-700' : 'text-slate-600'
                        )}>
                          {value}
                        </span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
