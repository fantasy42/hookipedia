'use client';

import * as React from 'react';

export function ScrollTop() {
  const handleScrollToTop = React.useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }, []);

  return (
    <button
      className="flex items-center gap-1.5 text-fd-muted-foreground cursor-pointer text-sm transition-colors hover:text-fd-accent-foreground"
      type="button"
      onClick={handleScrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="m5 12 7-7 7 7" />
        <path d="M12 19V5" />
      </svg>
      <span>Scroll to top</span>
    </button>
  );
}
