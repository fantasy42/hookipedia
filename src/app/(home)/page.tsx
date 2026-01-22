import type {Metadata} from 'next';

import * as React from 'react';
import Link from 'next/link';

import {baseUrl} from '@/lib/metadata';

export default function HomePage() {
  return (
    <React.Fragment>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Hookipedia',
            url: baseUrl,
          }),
        }}
      />

      <main className="pb-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <section className="pt-16 pb-16 md:px-4 space-y-6 text-center mb-12">
            <div className="mx-auto w-full max-w-5xl space-y-5">
              <h1 className="text-balance text-center font-semibold text-4xl sm:text-5xl lg:font-semibold xl:text-6xl">
                Build Confidently with Battle-Tested React Hooks
              </h1>
              <p className="mx-auto max-w-3xl text-fd-muted-foreground text-pretty sm:text-xl">
                Hookipedia is the definitive, community-vetted knowledge base
                for understanding, evaluating, and implementing the best custom
                React hooks. Stop guessing. Start building.
              </p>
            </div>
            <div className="inline-flex gap-4">
              <CtaLink href="/docs/introduction">Get Started</CtaLink>
              <CtaLink href="https://github.com/fantasy42/hookipedia">
                View on GitHub
              </CtaLink>
            </div>
          </section>
          <div className="grid gap-6 md:gap-0 md:grid-cols-4">
            <div className="md:col-span-2 flex flex-col gap-6 justify-between md:px-8 lg:px-10">
              <div className="flex flex-col gap-2 sm:gap-4">
                <h2 className="font-semibold text-xl tracking-tight sm:text-2xl md:text-3xl text-balance">
                  A Knowledge Base, Not a Library.
                </h2>
                <p className="sm:text-lg text-fd-muted-foreground text-pretty">
                  {`Hookipedia doesn't ship an NPM package. We ship `}
                  <span className="font-medium">clarity</span>. We meticulously
                  document and analyze standalone custom hooks, providing you
                  with the deep understanding needed to integrate them into your
                  projects with confidence.
                </p>
              </div>

              <Link
                href="/docs/handbook/hooks-directory"
                className="inline-flex items-center justify-center gap-2 w-fit select-none bg-white text-black rounded-full border border-solid border-fd-border px-3 h-9 text-sm font-medium hover:bg-gray-50 outline-none focus-visible:ring-fd-ring focus-visible:ring-[3px]"
              >
                Explore the Hooks
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </Link>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col border border-solid border-fd-border shadow-xs">
                {[
                  {
                    title: 'Evaluate',
                    content: (
                      <p className="font-medium text-fd-muted-foreground">
                        <span className="font-semibold text-fd-accent-foreground text-pretty">
                          See the full API.
                        </span>{' '}
                        Understand its edge cases and performance implications
                        before you write a line of code.
                      </p>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Understand',
                    content: (
                      <p className="font-medium text-fd-muted-foreground">
                        <span className="font-semibold text-fd-accent-foreground text-pretty">
                          Learn the “why” behind the implementation.
                        </span>{' '}
                        Explore the detailed rationale and alternative
                        approaches to grasp the core concepts.
                      </p>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6" />
                        <path d="M10 22h4" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Choose',
                    content: (
                      <p className="font-medium text-fd-muted-foreground text-pretty">
                        <span className="font-semibold text-fd-accent-foreground">
                          Select the right abstraction.
                        </span>{' '}
                        Avoid over-engineering or fragile solutions by matching
                        the hook to your specific use case.
                      </p>
                    ),
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
                      </svg>
                    ),
                  },
                ].map(({title, content, icon}) => (
                  <div
                    key={title}
                    className="flex flex-col gap-2 p-4 border-b border-solid border-fd-border last-of-type:border-b-0"
                  >
                    <h3 className="flex items-center gap-2 text-sm text-fd-muted-foreground font-medium">
                      {icon}
                      {title}
                    </h3>
                    {content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

function CtaLink({href, ...ctaLinkProps}: React.ComponentProps<typeof Link>) {
  const className =
    'inline-flex items-center justify-center bg-stone-900 text-white rounded-md px-3 h-9 text-sm font-medium hover:bg-stone-800 select-none outline-none focus-visible:ring-fd-ring focus-visible:ring-[3px]';

  if (href.toString().startsWith('https://')) {
    return (
      <a
        {...ctaLinkProps}
        href={href.toString()}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      />
    );
  }

  return <Link {...ctaLinkProps} href={href} className={className} />;
}

const description =
  'The encyclopedia of custom React hooks. Hookipedia helps developers find, evaluate, and implement reusable hooks with comprehensive documentation.';

export const metadata: Metadata = {
  description,
  twitter: {
    description,
  },
  openGraph: {
    description,
  },
};
