
import React from 'react';
import { PageLayout } from '@/components/layout/PageLayout';
import { AIChat } from '@/components/ai/AIChat';

const AIAgent = () => {
  return (
    <PageLayout title="AI Agent">
      <div className="h-full">
        <AIChat />
      </div>
    </PageLayout>
  );
};

export default AIAgent;
