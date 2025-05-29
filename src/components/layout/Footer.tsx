
import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 Imperial Axis. All rights reserved.</span>
            <div className="flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              <a 
                href="https://innovationimperial.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Innovation Imperial
              </a>
            </div>
          </div>
          
          <div className="inline-block">
            <img 
              src="/lovable-uploads/b1047f6d-7896-45ed-8ecf-3a4678a42398.png" 
              alt="Created and Powered by Innovation Imperial"
              className="h-8 mx-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
