import Sidebar from '@/app/contents/assessments/components/Sidebar';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function AssessmentsLayout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex">
        <Sidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
