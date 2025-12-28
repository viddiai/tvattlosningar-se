import * as React from 'react';
import { cn } from '@/lib/utils/cn';

interface Step {
  number: number;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  steps: Step[];
  className?: string;
}

export function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <div className={cn('grid gap-8 md:grid-cols-3 lg:grid-cols-5', className)}>
      {steps.map((step, index) => (
        <div key={index} className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white text-lg font-semibold mb-4">
            {step.number}
          </div>
          <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
          <p className="text-sm text-slate-600">{step.description}</p>
        </div>
      ))}
    </div>
  );
}
