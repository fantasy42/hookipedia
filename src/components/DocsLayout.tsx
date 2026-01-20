import * as React from 'react';
import {DocsLayout as FumadocsDocsLayout} from 'fumadocs-ui/layouts/docs';

export function DocsLayout({
  children,
  tree,
}: React.PropsWithChildren<{
  tree: React.ComponentProps<typeof FumadocsDocsLayout>['tree'];
}>) {
  return (
    <FumadocsDocsLayout
      tree={tree}
      nav={{
        title: 'Hookipedia',
      }}
    >
      {children}
    </FumadocsDocsLayout>
  );
}
