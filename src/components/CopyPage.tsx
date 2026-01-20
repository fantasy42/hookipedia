'use client';

import {useCopyButton} from 'fumadocs-ui/utils/use-copy-button';

export function CopyPage({text}: {text: string}) {
  const [checked, handleCopy] = useCopyButton(async () => {
    await navigator.clipboard.writeText(text);
  });

  const Icon = checked ? CheckIcon : CopyIcon;

  return (
    <button
      className="flex items-center gap-1.5 text-fd-muted-foreground cursor-pointer text-sm transition-colors hover:text-fd-accent-foreground"
      onClick={handleCopy}
      type="button"
    >
      <Icon />
      <span>Copy page</span>
    </button>
  );
}

function CheckIcon() {
  return (
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
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function CopyIcon() {
  return (
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
    >
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  );
}
