import * as React from 'react';
import {HomeLayout as FumadocsHomeLayout} from 'fumadocs-ui/layouts/home';

export function HomeLayout({children}: React.PropsWithChildren) {
  return (
    <FumadocsHomeLayout
      nav={{
        title: 'Hookipedia',
      }}
      githubUrl="https://github.com/fantasy42/hookipedia"
      links={[{text: 'Documentation', url: '/docs'}]}
    >
      {children}
    </FumadocsHomeLayout>
  );
}
